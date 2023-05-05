import { loadStdlib } from '@reach-sh/stdlib';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import Config, { algorandConfig } from '../config/Config';
import { IUserDb } from '../db/interface/IUserDb';
import rideModel from '../db/model/RideModel';
import { User } from '../entities/User';
import { RideStatus } from '../enums/RideStatus';
import * as backend from '../smart-contracts/index.main';
import { ReachAccount, ReachContract, ReachContractInfo, ReachEvent, ReachStdlib } from '../types/ReachTypes';

export class ReachService {
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

  setUpEvents(
    contract: ReachContract,
    passenger: User,
    driver: User,
    rideId: string,
    contractInfo: Promise<any>
  ): void {
    contract.events.rideStarted.monitor(async (event: ReachEvent) => {
      console.log(
        `Ride has started | RideId: ${rideId} | Passenger: ${passenger.username} | Driver: ${driver.username}`
      );

      await rideModel.updateStatus(rideId, RideStatus.Started);
      setTimeout(async () => {
        try {
          await reach.adminInterfereEnd(rideId, true, true);
          await rideModel.updateStatus(rideId, RideStatus.BeforeEndTimeout);
          console.log(`Admin interfered and ended the ride before it's timeout | RideId: ${rideId}`);
        } catch (error) {
          console.log(`Admin tried to interfere but the ride end has already ended | RideId: ${rideId}`, error);
        }
      }, Config.RIDE_END_TIMEOUT);
    });
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
    const contract = this.adminAccount.contract(backend, contractInfo);
    await contract.a.Ride.start();
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

    this.setUpEvents(adminContract, passenger, driver, rideId, contractInfo);

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

    setTimeout(
      () =>
        this.adminInterfereStart(contractInfo)
          .then(async () => {
            await rideModel.updateStatus(rideId, RideStatus.BeforeStartTimeout);
            console.log(`Admin interfered on ride start | RideId: ${rideId}`);
          })
          .catch((error) => {
            console.log(`Admin tried to interfere but the ride has already started | RideId: ${rideId}`, error);
          }),
      Config.RIDE_START_TIMEOUT
    );

    return contractInfo;
  }
}

export const reach = new ReachService();
