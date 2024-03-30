import {
  GET_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  ADD_WITH_PAYLOAD,
  SHOW_INCOME,
  SHOW_EXPENSE,
} from "../actions/transactionAction";

const initialState = {
  allTransactions: [],
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
        // allTransactions: action.payload, // update allTransactions with the payload
        // TODO fixed all transactions to support filtering.
        filteredTransactions: action.payload,
        allTransactions: state.filteredTransactions,
        // allTransactions: action.payload, // update allTransactions with the payload
        // allTransactions: state.allTransactions, // update allTransactions with the payload
        // filteredTransactions: state.filteredTransactions,
      };
    //   TODO should change with new transaction from form
    case ADD_TRANSACTION:
      const newTransaction = {};
      return {
        ...state,
        allTransactions: [...state.allTransactions, newTransaction],
        filteredTransactions:
          state.currentFilter === "all"
            ? [...state.filteredTransactions, newTransaction]
            : state.filteredTransactions,
      };

    case SHOW_INCOME:
      console.log(action.payload);
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
