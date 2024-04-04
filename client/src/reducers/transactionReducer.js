import {
  GET_ALL_TRANSACTIONS,
  ADD_TRANSACTION,
  SHOW_INCOME,
  SHOW_EXPENSE,
  SHOW_ALL_TRANSACTIONS,
  DELETE_TRANSACTIONS,
} from "../actions/transactionAction";
/*
 * reducers that do all the work behind the scenes for managing the redux states
 * the reducer called with defferent case, after an api call has been made to modify the state and
 * present the wanted data to the user
 * */
const initialState = {
  allTransactions: [],
  filteredTransactions: [],
  currentFilter: "all",
  totalIncome: 0,
  totalExpense: 0,
};

// Helper function to calculate current balance total expense/income
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
        return state;
      }

    case SHOW_ALL_TRANSACTIONS:
      return {
        ...state,
        // assuming action.payload contains all transactions
        allTransactions: state.allTransactions,
        // show all without filter
        filteredTransactions: state.allTransactions,
      };

    // after an add transaction succeeded, update the allTransaction
    // to include the new added transaction
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

    // show all income filter, update the filters transaction to show only income
    case SHOW_INCOME:
      return {
        ...state,
        currentFilter: "income",

        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "income",
        ),
      };

    // show all expenses filter, update the filters transaction to show only expenses
    case SHOW_EXPENSE:
      return {
        ...state,
        currentFilter: "expense",
        filteredTransactions: state.allTransactions.filter(
          (transaction) => transaction.type === "expense",
        ),
      };

    //  updates the allTransaction to show all data and exclude the
    // deleted transactions
    case DELETE_TRANSACTIONS:
      const updatedTransactionsDelete = state.allTransactions.filter(
        (transaction) => !action.payload.includes(transaction.transaction_id),
      );

      const { totalIncomeDelete, totalExpenseDelete, currentBalanceDelete } =
        calculateFinancials(updatedTransactionsDelete);

      // update filteredTransactions based on the current filter
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
