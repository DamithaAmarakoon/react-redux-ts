import { Dispatch } from 'redux';
import { BankActionType } from './types';
import { BankAction } from '../../action-types';

export const depositMoney =
  (amount: number) => (dispatch: Dispatch<BankAction>) =>
    dispatch({
      type: BankActionType.DEPOST,
      payload: amount
    });

export const withdrawMoney =
  (amount: number) => (dispatch: Dispatch<BankAction>) =>
    dispatch({
      type: BankActionType.WITHDRAW,
      payload: amount
    });

export const bankrupt = () => (dispatch: Dispatch<BankAction>) =>
  dispatch({
    type: BankActionType.BANKRUPT
  });
