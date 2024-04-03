import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { transactionReducer } from "../reducers/transactionReducer";
import { userReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk), // apply the thunk middleware
);

// const store = createStore(
//   transactionReducer,
//   applyMiddleware(thunk), // apply the thunk middleware
// );

const budgetSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(budgetSubscriber);

store.dispatch({ type: "getAllTransactions" });
store.dispatch({ type: "showIncome" });
store.dispatch({ type: "showExpense" });
store.dispatch({ type: "addTransaction" });
store.dispatch({ type: "login" });

export default store;
