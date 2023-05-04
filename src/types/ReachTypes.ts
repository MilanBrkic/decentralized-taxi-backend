import { IAccount, IContract, Time } from '@reach-sh/stdlib/dist/types/shared_impl';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';

export type ReachContract = IContract<any, any, any, any>;
export type ReachAccount = IAccount<any, any, any, any, any>;
export type ReachStdlib = Stdlib_User<any, any, any, any, any, any, any, any, any, any, any>;
export type ReachEvent = { when: Time; what: any };
export type ReachContractInfo = { type: 'BigNumber'; hex: string };
