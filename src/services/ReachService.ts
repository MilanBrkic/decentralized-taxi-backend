import { loadStdlib } from '@reach-sh/stdlib';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import Config, { algorandConfig } from '../config/Config';
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

  setUpEvents(contract: ReachContract): void {}

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

  public async adminInterfereStart(account: ReachAccount, contractInfo: any) {
    const contract = account.contract(backend, contractInfo);
    await contract.a.Ride.start();
  }

  async newAccountFromMnemonic(secret: string): Promise<IAccount<any, any, any, any, any>> {
    const account: IAccount<any, any, any, any, any> = await this.stdlib.newAccountFromMnemonic(secret);

    return account;
  }

  async launchRide(passenger: User, driver: User, price: number, rideId: string): Promise<ReachContractInfo> {
    const adminContract: ReachContract = reach.adminAccount.contract(backend);
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
        this.adminInterfereStart(reach.adminAccount, contractInfo)
          .then(async () => {
            await rideModel.updateStatus(rideId, RideStatus.BeforeStartTimeout);
            console.log(`Admin interfered on ride start | RideId: ${rideId}`);
          })
          .catch((error) => {
            console.log("Admin tried to interfere but it's too late", error);
          }),
      10 * 1000
    );

    return contractInfo;
  }
}

export const reach = new ReachService();
