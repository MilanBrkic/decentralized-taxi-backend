import { loadStdlib } from '@reach-sh/stdlib';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import { isPromise } from 'util/types';
import Config, { algorandConfig } from '../config/Config';
import { IUserDb } from '../db/interface/IUserDb';
import rideModel from '../db/model/RideModel';
import { User } from '../entities/User';
import { RideStatus } from '../enums/RideStatus';
import * as backend from '../smart-contracts/index.main';
import { ReachAccount, ReachContract, ReachContractInfo, ReachEvent, ReachStdlib } from '../types/ReachTypes';

export class Reach {
  stdlib!: ReachStdlib;
  adminAccount!: ReachAccount;
  adminInteract!: any;
  constructor() {}

  async init(): Promise<void> {
    if (!Config.ADMIN_SECRET) {
      throw Error('ADMIN_SECRET is not set');
    }

    this.stdlib = loadStdlib(algorandConfig);
    this.stdlib.setProviderByName(Config.ALGORAND_PROVIDER_NAME);
    this.adminAccount = await this.stdlib.newAccountFromMnemonic(Config.ADMIN_SECRET);

    this.setAdminInteract();

    console.log('Admin account created', this.adminAccount.networkAccount.addr);
    console.log('Reach initialized...');
  }

  setAdminInteract() {
    this.adminInteract = {
      ...this.stdlib.hasConsoleLogger,
      feePercentage: Config.FEE_PERCENTAGE,
      depositPercentage: Config.DEPOSIT_PERCENTAGE,
      ready: () => {
        throw 666;
      },
    };
  }

  setUpEvents(
    contract: ReachContract,
    passenger: User,
    driver: User,
    rideId: string,
    price: number,
    depositPercentage: number
  ): void {
    contract.events.rideStarted.monitor(async (event: ReachEvent) => {
      console.log(
        `Ride has started | RideId: ${rideId} | Passenger: ${passenger.username} | Driver: ${driver.username}`
      );

      await rideModel.updateStatus(rideId, RideStatus.Started);

      console.log(`adminInterfereStart will be called in ${Config.RIDE_END_TIMEOUT / 1000}s | RideId: ${rideId}`);
      setTimeout(async () => {
        try {
          await reach.adminInterfereEnd(rideId, true, true);
          await rideModel.updateStatus(rideId, RideStatus.BeforeEndTimeout);
          console.log(`Admin interfered and ended the ride before | RideId: ${rideId}`);
        } catch (error) {
          console.log(`Admin tried to interfere but the ride end has already ended | RideId: ${rideId}`, error);
        }
      }, Config.RIDE_END_TIMEOUT);
    });

    contract.events.rideEnded.monitor(async (event: ReachEvent) => {
      const { what } = event;
      const paymentToPassenger = what[0];
      const paymentToDriver = what[1];
      const paymentToAdmin = what[2];

      const deposit = price * (depositPercentage / 100);
      const passengerHasPaid = price + deposit;
      const driverHasPaid = deposit;

      const passengerNet = paymentToPassenger - passengerHasPaid;
      const driverNet = paymentToDriver - driverHasPaid;
      const adminNet = paymentToAdmin;

      const ride = await rideModel.findById(rideId);
      if (ride.status === RideStatus.Started) {
        ride.status = RideStatus.Ended;
      }

      ride.paymentInfo = {
        passengerNet,
        driverNet,
        adminNet,
      };

      await (ride as any).save();

      console.log(
        `Ride has ended | RideId: ${rideId} | Status: ${ride.status} | passengerNet: ${passengerNet} | driverNet: ${driverNet}  | adminNet: ${adminNet}`
      );
    });
  }

  async newAccountFromMnemonic(secret: string): Promise<IAccount<any, any, any, any, any>> {
    const account: IAccount<any, any, any, any, any> = await this.stdlib.newAccountFromMnemonic(secret);

    return account;
  }

  async startRide(userDb: IUserDb, contractInfo: ReachContractInfo): Promise<void> {
    const user = new User(userDb);
    await user.setWallet();
    const contract = user.wallet.contract(backend, Number(contractInfo._hex) as any);
    await contract.a.Ride.start();
  }

  async adminInterfereStart(contractInfo: any) {
    let contract;
    if (isPromise(contractInfo)) {
      contract = this.adminAccount.contract(backend, contractInfo);
    } else {
      contract = this.adminAccount.contract(backend, Number(contractInfo._hex) as any);
    }

    await contract.a.Ride.start();
  }

  timeOutedAdminInterfereStart(contractInfo: any, rideId: string, timeout: number) {
    console.log(`adminInterfereStart will be called in ${timeout / 1000}s | RideId: ${rideId}`);
    setTimeout(async () => {
      try {
        await this.adminInterfereStart(contractInfo);
        await rideModel.updateStatus(rideId, RideStatus.BeforeStartTimeout);
        console.log(`Admin interfered on ride start | RideId: ${rideId}`);
      } catch (error) {
        console.log(`Admin tried to interfere but the ride has already started | RideId: ${rideId}`, error);
      }
    }, timeout);
  }

  async adminInterfereEnd(rideId: string, wasPassengerAtLocation: boolean, wasDriverAtLocation: boolean) {
    const ride = await rideModel.findById(rideId);
    if (!ride) {
      throw Error(`Ride not found | RideId: ${rideId}`);
    }

    if (!ride.contractInfo) {
      throw Error(`Contract info not found | RideId: ${rideId}`);
    }

    const contract = this.adminAccount.contract(backend, Number(ride.contractInfo._hex) as any);
    await contract.a.Ride.adminInterfereEnd(wasPassengerAtLocation, wasDriverAtLocation);
  }

  async launchRide(passenger: User, driver: User, price: number, rideId: string): Promise<ReachContractInfo> {
    const adminContract: ReachContract = this.adminAccount.contract(backend);
    const contractInfo = adminContract.getInfo();
    const passengerContract = passenger.wallet.contract(backend, contractInfo);
    const driverContract = driver.wallet.contract(backend, contractInfo);

    const passengerInteract = {
      ...this.stdlib.hasConsoleLogger,
      passengerPrice: price,
      informTimeout: () => {
        console.log(`timed out.`);
      },
    };

    const driverInteract = {
      ...this.stdlib.hasConsoleLogger,
      driverPrice: price,
      informTimeout: () => {
        console.log(`timed out.`);
      },
    };

    this.adminInteract.ready = async () => {
      console.log(`contract deployed | RideId: ${rideId}`);
      await rideModel.updateStatus(rideId, RideStatus.Deployed);

      throw 666;
    };

    this.setUpEvents(adminContract, passenger, driver, rideId, price, this.adminInteract.depositPercentage);

    try {
      await Promise.all([
        adminContract.participants.Admin(this.adminInteract),
        passengerContract.participants.Passenger(passengerInteract),
        driverContract.participants.Driver(driverInteract),
      ]);
    } catch (error) {
      if (error !== 666) {
        throw error;
      }
    }

    this.timeOutedAdminInterfereStart(contractInfo, rideId, Config.RIDE_START_TIMEOUT);

    return contractInfo;
  }
}

export const reach = new Reach();
