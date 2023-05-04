import { loadStdlib } from '@reach-sh/stdlib';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import Config, { algorandConfig } from '../../config/Config';

const stdlib = loadStdlib(algorandConfig);

export class ReachService {
  stdlib!: Stdlib_User<any, any, any, any, any, any, any, any, any, any, any>;
  adminAccount!: IAccount<any, any, any, any, any>;
  constructor() {}

  async init(): Promise<void> {
    if (!Config.ADMIN_SECRET) {
      throw Error('ADMIN_SECRET is not set');
    }

    this.stdlib = stdlib;
    this.stdlib.setProviderByName(Config.ALGORAND_PROVIDER_NAME);
    this.adminAccount = await this.stdlib.newAccountFromMnemonic(Config.ADMIN_SECRET);

    console.log('Admin account created', this.adminAccount.networkAccount.addr);
    console.log('Reach initialized...');
  }

  async newAccountFromMnemonic(secret: string): Promise<IAccount<any, any, any, any, any>> {
    const account: IAccount<any, any, any, any, any> = await this.stdlib.newAccountFromMnemonic(secret);

    return account;
  }
}

export const reach = new ReachService();
