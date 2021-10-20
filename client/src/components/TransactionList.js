import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
// import { Test } from './Test';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  // const { test } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
      {/* <ul id="list" className="list">
        {test.map((test) => (
          <Test test={test} />
        ))}
      </ul> */}
    </>
  );
};
