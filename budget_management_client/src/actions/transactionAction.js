import axios from "axios";

const API_URL = "http://localhost:8005/budget/";

export const GET_ALL_TRANSACTIONS = "getAllTransactions";
export const ADD_TRANSACTION = "addTransaction";
export const ADD_WITH_PAYLOAD = "addWithPayload";
export const SHOW_ALL_TRANSACTIONS = "showAllTransactions";

export const SHOW_INCOME = "showIncome";
export const SHOW_EXPENSE = "showExpense";

// Action creators

// api call get all transactions from backend
export const getAllTransactions = () => async (dispatch) => {
  try {
    console.log("Get all transactions from DB call");
    const response = await axios.get(API_URL + "getAllTransactions");
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: response.data.transactions,
    });
  } catch (error) {
    console.error(error);
    // handle error
  }
};

// api post call add a new transaction to the db through the backend
export const addTransaction = (newTransaction) => async (dispatch) => {
  console.log(newTransaction);
  try {
    const response = await axios.post(
      API_URL + "createTransaction",
      newTransaction,
    );
    dispatch({
      type: ADD_TRANSACTION,
      payload: response.data.transaction,
    });
  } catch (error) {
    console.error(error);
    // handle error
  }
  // TODO fix this undefined:
  console.log(`New transaction added: ${newTransaction.name}`);
  console.log("update all transactions list");
  getAllTransactions();
};
export const showIncome = () => ({ type: SHOW_INCOME });
export const showExpense = () => ({ type: SHOW_EXPENSE });
