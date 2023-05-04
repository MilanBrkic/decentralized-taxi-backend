import { loadStdlib } from '@reach-sh/stdlib';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import { algorandConfig } from '../../config/Config';
const stdlib = loadStdlib(algorandConfig);

export class ReachService {
  stdlib!: Stdlib_User<any, any, any, any, any, any, any, any, any, any, any>;
  constructor() {
    this.stdlib = stdlib;

    this.stdlib.setProviderByName('TestNet');
  }

  async newAccountFromMnemonic(secret: string): Promise<string> {
    const account: IAccount<any, any, any, any, any> = await this.stdlib.newAccountFromMnemonic(secret);

    return account.networkAccount.addr;
  }

  async getBalance(): Promise<void> {
    const address = 'C4DAVW7MVUAFF4HUAD6D7PJQVKCILU4VH7LSPZJ5R363QAHZZIK4P7FFMU';

    const balance = await this.stdlib.balanceOf(address);
    console.log('balance', balance);
  }
}
