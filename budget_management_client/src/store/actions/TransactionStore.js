import { createStore } from "redux";

const initialState = {
  allTransactions: [
    {
      transaction_id: 1,
      transaction_name: "bit",
      amount: 200,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 2,
      transaction_name: "paypal",
      amount: 5000,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 3,
      transaction_name: "payffffpal",
      amount: 235,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 4,
      transaction_name: "coffee",
      amount: 25,
      type: "expense",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 5,
      transaction_name: "TV",
      amount: 2055,
      type: "expense",
      date: "2024-03-27T22:00:00.000Z",
    },
  ],
  filteredTransactions: [],
  showExpense: true,
  showIncome: true,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllTransactions":
      return {
        ...state,
        filteredTransactions: state.allTransactions,
      };
    case "addTransaction":
      const newTransaction = {
        transaction_id: 10,
        transaction_name: "test",
        amount: 2030,
        type: "income",
        date: "2024-03-27T22:00:00.000Z",
      };
      return {
        ...state,
        allTransactions: [...state.allTransactions, newTransaction],
        filteredTransactions: [...state.filteredTransactions, newTransaction],
      };
    case "addWithPayload":
      const payloadTransaction = {
        transaction_id: action.payload.id,
        transaction_name: action.payload.name,
        amount: action.payload.amount,
        type: action.payload.trType,
        date: action.payload.date,
      };
      return {
        ...state,
        allTransactions: [...state.allTransactions, payloadTransaction],
        filteredTransactions: [
          ...state.filteredTransactions,
          payloadTransaction,
        ],
      };
    case "showIncome":
      return {
        ...state,
        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "income",
        ),
      };
    case "showExpense":
      return {
        ...state,
        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "expense",
        ),
      };
    default:
      return state;
  }
};
//       ffffffffffffffffffffffffffffffffff
//
// const transactionReducer = (state = initialState, action) => {
//   if (action.type === "getAllTransactions") {
//     // console.log(state.transactions);
//     return {
//       transactions: state.transactions,
//       showIncome: state.showIncome,
//       showExpense: state.showExpense,
//     };
//   }
//   // adds a new transaction to the state.
//   if (action.type === "addTransaction") {
//     // console.log(state.transactions);
//     return {
//       transactions: [
//         ...state.transactions,
//         {
//           transaction_id: 10,
//           transaction_name: "test",
//           amount: 2030,
//           type: "income",
//           date: "2024-03-27T22:00:00.000Z",
//         },
//       ],
//       showIncome: state.showIncome,
//       showExpense: state.showExpense,
//     };
//   }
//   // change the payload as action. ....
//   if (action.type === "addWithPayload") {
//     return {
//       transactions: [
//         ...state.transactions,
//         {
//           transaction_id: action.payload.id,
//           transaction_name: action.payload.name,
//           amount: action.payload.amount,
//           type: action.payload.trType,
//           date: action.payload.date,
//         },
//       ],
//       showIncome: state.showIncome,
//       showExpense: state.showExpense,
//     };
//   }
//   // show only income
//   if (action.type === "showIncome") {
//     return {
//       transactions: state.transactions.filter(
//         (transaction) => transaction.type === "income",
//       ),
//     };
//   }
//   // show only expense
//   if (action.type === "showExpense") {
//     return {
//       ...state,
//       filteredTransactions: state.transactions.filter(
//         (transaction) => transaction.type === "expense",
//       ),
//     };
//   }
//   return state;
// };

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
