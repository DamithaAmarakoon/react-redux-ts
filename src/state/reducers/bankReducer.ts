import { BankActionType } from '../actions/bank/types';
import { BankAction } from '../action-types/bank';

const initialState = 0;

const reducer = (state: number = initialState, action: BankAction) => {
    switch (action.type) {
        case BankActionType.DEPOST:
            return state + action.payload;
        case BankActionType.WITHDRAW:
            return state === 0 ? state : state - action.payload;
        case BankActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
};

export default reducer;
