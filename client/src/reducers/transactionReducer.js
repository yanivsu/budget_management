import {
  GET_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  SHOW_INCOME,
  SHOW_EXPENSE,
  SHOW_ALL_TRANSACTIONS,
  DELETE_TRANSACTIONS,
} from "../actions/transactionAction";

const initialState = {
  allTransactions: [],
  filteredTransactions: [],
  currentFilter: "all",
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      // Check if action.payload is an array before processing
      if (Array.isArray(action.payload)) {
        // Calculate total income and expense from the payload
        const totalIncome = action.payload.reduce((total, transaction) => {
          return transaction.type === "income"
            ? total + parseFloat(transaction.amount)
            : total;
        }, 0);

        const totalExpense = action.payload.reduce((total, transaction) => {
          return transaction.type === "expense"
            ? total + parseFloat(transaction.amount)
            : total;
        }, 0);

        // Calculate current balance
        const currentBalance = totalIncome - totalExpense;

        return {
          ...state,
          allTransactions: action.payload,
          filteredTransactions: action.payload,
          currentBalance: currentBalance,
          totalIncome: totalIncome,
          totalExpense: totalExpense,
        };
      } else {
        // If action.payload is not an array, return the current state
        console.error("Payload is not an array:", action.payload);
        return state;
      }
    case SHOW_ALL_TRANSACTIONS:
      return {
        ...state,
        // allTransactions: action.payload, // update allTransactions with the payload
        // TODO fixed all transactions to support filtering.
        // filteredTransactions: action.payload,
        allTransactions: state.filteredTransactions,
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
    //   TODO fix that the deleted transaction wont appear
    case DELETE_TRANSACTIONS:
      return {
        ...state,
        filteredTransactions: state.allTransactions.filter(
          (transaction) => !action.payload.includes(transaction.id),
        ),
      };
    default:
      return state;
  }
};
