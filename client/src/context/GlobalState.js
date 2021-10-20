import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  transactions: [
    // placeholders >>
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camera', amount: 150 },
  ],
  error: null,
  loading: true,
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
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: err.response.data.error,
      });
    }
  };

  // delete from UI
  // const deleteTransaction = (id) => {
  //   dispatch({
  //     type: 'DELETE_TRANSACTION',
  //     payload: id,
  //   });
  // };
  // const addTransaction = (transaction) => {
  //   dispatch({
  //     type: 'ADD_TRANSACTION',
  //     payload: transaction,
  //   });
  // };

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
        error: state.error,
        loading: state.loading,
        // test: state.test,
        deleteTransaction,
        addTransaction,
        getTransactions,

        // deleteTest,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
