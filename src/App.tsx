import React from 'react';
import './App.scss';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bankActions, State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    bankActions,
    dispatch
  );

  const state = useSelector((state: State) => state.bank);

  return (
    <div className='App'>
      <h1 className='my-4'>{state}</h1>
      <button onClick={() => depositMoney(1000)} className='btn btn-primary'>
        Deposit
      </button>
      <button onClick={() => withdrawMoney(500)} className='btn btn-warning'>
        Withdraw
      </button>
      <button onClick={() => bankrupt()} className='btn btn-danger'>
        Bankrupt
      </button>
    </div>
  );
}

export default App;
