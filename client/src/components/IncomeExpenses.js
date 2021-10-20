import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  // income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  //expense
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="">
        <h4>Income</h4>

        <p id="money-plus" className="money plus">
          {`$${numberWithCommas(income)}`}
        </p>
      </div>
      <div className="">
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {`$${numberWithCommas(Math.abs(expense))}`}
        </p>
      </div>
    </div>
  );
};
