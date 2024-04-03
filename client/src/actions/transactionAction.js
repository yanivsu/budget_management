import axios from "axios";

const API_URL = "http://localhost:8005/budget/";

export const GET_ALL_TRANSACTIONS = "getAllTransactions";
export const ADD_TRANSACTION = "addTransaction";
export const UPDATE_TRANSACTION = "updateTransaction";
export const DELETE_TRANSACTIONS = "deleteTransactions";
export const SHOW_ALL_TRANSACTIONS = "showAllTransactions";

export const SHOW_INCOME = "showIncome";
export const SHOW_EXPENSE = "showExpense";

// Action creators

// api call get all transactions from server
export const getAllTransactions = (userId) => async (dispatch) => {
  try {
    console.log("Get all transactions from DB call");
    const response = await axios.get(API_URL + "getAllTransactions/" + userId);
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: response.data.transactions,
    });
  } catch (error) {
    console.error(error);
    // handle error
  }
};

// api post call add a new transaction to the db through the server
export const addTransaction = (newTransaction, userId) => async (dispatch) => {
  try {
    const response = await axios.post(
      API_URL + "createTransaction",
      newTransaction,
    );
    dispatch({
      type: ADD_TRANSACTION,
      payload: response.data.transaction,
    });
    console.log(`New transaction added: ${newTransaction.transaction_name}`);
  } catch (error) {
    console.error(error);
  }
  dispatch(getAllTransactions(userId));
};

// delete api call that sends with an array of selected transaction fo deletion
export const deleteTransactions =
  (transactionIds, userId) => async (dispatch) => {
    console.log("Transactions to delete: ", transactionIds);
    try {
      const response = await axios.delete(API_URL + "deleteTransaction", {
        data: { transactionIds },
      });
      dispatch({
        type: DELETE_TRANSACTIONS,
        payload: response.data.transactionIds,
      });
      dispatch(getAllTransactions(userId));
    } catch (error) {
      console.error(error);
    }
  };

export const updateTransaction = (newTransaction) => async (dispatch) => {
  console.log(newTransaction);
  console.log("*************************************************************");
  try {
    const response = await axios.put(
      API_URL + "updateTransaction",
      newTransaction,
    );
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: response.data.transaction,
    });
  } catch (error) {
    console.error(error);
    // handle error
  }
};

export const showIncome = () => ({ type: SHOW_INCOME });
export const showExpense = () => ({ type: SHOW_EXPENSE });
