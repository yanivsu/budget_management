import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { transactionReducer } from "../reducers/transactionReducer";
import { userReducer } from "../reducers/userReducer";

/*
 * redux state manager
 * uses 2 reducers
 * and a thunk middleware to allow to write action creators a
 * that returns a function that are async api calls
 * */
const rootReducer = combineReducers({
  transactions: transactionReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  // apply the thunk middleware
  applyMiddleware(thunk),
);

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
