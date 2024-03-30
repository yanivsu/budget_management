import axios from "axios";

const API_URL = "http://localhost:8005/budget/";

export const GET_ALL_TRANSACTIONS = "getAllTransactions";
export const ADD_TRANSACTION = "addTransaction";
export const ADD_WITH_PAYLOAD = "addWithPayload";
export const SHOW_INCOME = "showIncome";
export const SHOW_EXPENSE = "showExpense";

// Action creators
// export const getAllTransactions = () => ({type: GET_ALL_TRANSACTIONS});
// Action creators
export const getAllTransactions = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL + "getAllTransactions");
    // const response = await axios.get(
    //   "http://localhost:8005/budget/getAllTransactions",
    // );
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: response.data.transactions,
    });
  } catch (error) {
    console.error(error);
    // handle error
  }
};

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
};

// export const addTransaction = (transaction) => async dispatch => {
//     try {
// export const addTransaction = () => ({ type: ADD_TRANSACTION });
// export const addWithPayload = (payload) => ({
//   type: ADD_WITH_PAYLOAD,
//   payload,
// });
//         const response = await axios.post(API_URL + "addTransaction", transaction);
//         dispatch({ type: ADD_TRANSACTION, payload: response.data });
//     } catch (error) {
//         console.error(error);
//         // handle error
//     }
// };
//
// const getAllTransactions = () => {
//   return fetch(API_URL + "getAllTransactions")
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log("transactions: ", result);
//       console.log("test");
//       return result; // return the result
//     });
// };

export const showIncome = () => ({ type: SHOW_INCOME });
export const showExpense = () => ({ type: SHOW_EXPENSE });
