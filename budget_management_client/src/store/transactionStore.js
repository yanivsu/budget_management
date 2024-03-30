import { createStore } from "redux";
import transactionReducer from "../reducers/transactionReducer";

const store = createStore(transactionReducer);
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
