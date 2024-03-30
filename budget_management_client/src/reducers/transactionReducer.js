import {
  GET_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  ADD_WITH_PAYLOAD,
  SHOW_INCOME,
  SHOW_EXPENSE,
} from "../actions/transactionAction";

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
  currentFilter: "all",
  // showExpense: false,
  // showIncome: false,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return {
        ...state,
        filteredTransactions: state.allTransactions,
      };
    //   TODO should change with new transaction from form
    case ADD_TRANSACTION:
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
        filteredTransactions:
          state.currentFilter === "all"
            ? [...state.filteredTransactions, newTransaction]
            : state.filteredTransactions,
      };

    case SHOW_INCOME:
      return {
        ...state,
        currentFilter: "income",
        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "income",
        ),
      };
    case SHOW_EXPENSE:
      return {
        ...state,
        currentFilter: "expense",
        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "expense",
        ),
      };
    // TODO add with payload(form)
    case ADD_WITH_PAYLOAD:
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
    default:
      return state;
  }
};

export default transactionReducer;
