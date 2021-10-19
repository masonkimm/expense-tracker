import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    // placeholders >>
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
  // test: [
  //   // placeholders >>
  //   { id: 1, text: 'mason', amount: -20 },
  //   { id: 2, text: 'jay', amount: 300 },
  //   { id: 3, text: 'jiyoung', amount: -10 },
  //   { id: 4, text: 'jungin', amount: 150 },
  // ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provier component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  // const deleteTest = (id) => {
  //   dispatch({
  //     type: 'DELETE_TEST',
  //     payload: id,
  //   });
  // };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        // test: state.test,
        deleteTransaction,
        addTransaction,
        // deleteTest,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
