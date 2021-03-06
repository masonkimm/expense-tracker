import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {transaction.amount > 0 ? '+ $' : '- $'}
        {numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        X
      </button>
    </li>
  );
};
