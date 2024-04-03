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
  totalIncome: 0,
  totalExpense: 0,
};

// Helper function to calculate financials
const calculateFinancials = (transactions) => {
  const totalIncome = transactions.reduce((total, transaction) => {
    return transaction && transaction.type === "income"
      ? total + parseFloat(transaction.amount)
      : total;
  }, 0);

  const totalExpense = transactions.reduce((total, transaction) => {
    return transaction && transaction.type === "expense"
      ? total + parseFloat(transaction.amount)
      : total;
  }, 0);

  const currentBalance = totalIncome - totalExpense;

  return { totalIncome, totalExpense, currentBalance };
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      // Check if action.payload is an array before processing
      if (Array.isArray(action.payload)) {
        // Calculate total income and expense and current balance from the payload
        const { totalIncome, totalExpense, currentBalance } =
          calculateFinancials(action.payload);
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
        allTransactions: state.allTransactions, // Assuming action.payload contains all transactions
        filteredTransactions: state.allTransactions, // Show all without filter
      };

    case ADD_TRANSACTION:
      const newTransaction = action.payload;
      const updatedTransactions = [...state.allTransactions, newTransaction];

      const { totalIncome, totalExpense, currentBalance } =
        calculateFinancials(updatedTransactions);

      return {
        ...state,
        allTransactions: updatedTransactions,
        filteredTransactions:
          state.currentFilter === "all"
            ? updatedTransactions
            : state.filteredTransactions,
        currentBalance: currentBalance,
        totalIncome: totalIncome,
        totalExpense: totalExpense,
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

    case DELETE_TRANSACTIONS:
      const updatedTransactionsDelete = state.allTransactions.filter(
        (transaction) => !action.payload.includes(transaction.transaction_id),
      );

      const { totalIncomeDelete, totalExpenseDelete, currentBalanceDelete } =
        calculateFinancials(updatedTransactionsDelete);

      // Update filteredTransactions based on the current filter
      const updatedFilteredTransactions =
        state.currentFilter === "all"
          ? updatedTransactionsDelete
          : updatedTransactionsDelete.filter(
              (transaction) => transaction.type === state.currentFilter,
            );

      return {
        ...state,
        allTransactions: updatedTransactionsDelete,
        filteredTransactions: updatedFilteredTransactions,
        currentBalance: currentBalanceDelete,
        totalIncome: totalIncomeDelete,
        totalExpense: totalExpenseDelete,
      };

    default:
      return state;
  }
};
