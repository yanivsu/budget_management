import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import transactionReducer from "../reducers/transactionReducer";

const store = createStore(
  transactionReducer,
  applyMiddleware(thunk), // apply the thunk middleware
);

const transactionSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(transactionSubscriber);

store.dispatch({ type: "getAllTransactions" });
store.dispatch({ type: "showIncome" });
store.dispatch({ type: "showExpense" });
store.dispatch({ type: "addTransaction" });

export default store;
