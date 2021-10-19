import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Test = ({ test }) => {
  const { deleteTest } = useContext(GlobalContext);

  return (
    <li className={test.amount > 0 ? 'plus' : 'minus'}>
      {test.text}{' '}
      <span>
        {test.amount > 0 ? '+ $' : '- $'}
        {Math.abs(test.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTest(test.id)}>
        X
      </button>
    </li>
  );
};
