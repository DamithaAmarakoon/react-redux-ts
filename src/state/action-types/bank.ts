import { BankActionType } from '../actions/bank/types';

interface DepositAction {
    type: BankActionType.DEPOST;
    payload: number;
}

interface WithdrawAction {
    type: BankActionType.WITHDRAW;
    payload: number;
}

interface BankruptAction {
    type: BankActionType.BANKRUPT;
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction;
