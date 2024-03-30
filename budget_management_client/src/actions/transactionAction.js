import axios from "axios";

const API_URL = "http://localhost:8005/budget/";

// export const getAllTransactions = () => {
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

export const GET_ALL_TRANSACTIONS = "getAllTransactions";
export const ADD_TRANSACTION = "addTransaction";
export const ADD_WITH_PAYLOAD = "addWithPayload";
export const SHOW_INCOME = "showIncome";
export const SHOW_EXPENSE = "showExpense";

// Action creators
export const getAllTransactions = () => ({ type: GET_ALL_TRANSACTIONS });
export const addTransaction = () => ({ type: ADD_TRANSACTION });
export const addWithPayload = (payload) => ({
  type: ADD_WITH_PAYLOAD,
  payload,
});
export const showIncome = () => ({ type: SHOW_INCOME });
export const showExpense = () => ({ type: SHOW_EXPENSE });
