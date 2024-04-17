const BudgetService = require("../services/budget.service");

// create new transaction controller
exports.createTransaction = async (req, res, next) => {
  try {
    const transaction = req.body;
    const transactionAdded = await BudgetService.createTransactionService(
      transaction
    ); // YANIV: where is catch ???

    return res.status(200).send({ transactionAdded });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
// get all transaction Controller
exports.getAllTransactions = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const transactions = await BudgetService.getAllTransactionsService(userId); // YANIV: where is catch ???
    return res.status(200).send({ transactions });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
// delete transaction by transaction ID controller
exports.deleteTransactionsByIds = async (req, res, next) => {
  try {
    const transactionIds = req.body.transactionIds;
    const affectedRows = await BudgetService.deleteTransactionsByIdsService(
      transactionIds
    );
    if (affectedRows === 0) {
      // no rows were deleted, so the transactionIds must not exist
      res.status(404).json({ message: "Transactions not found" });
    } else {
      // the transactions were successfully deleted
      return res.status(200).json({
        message: "Transactions successfully deleted",
        transactionIds: transactionIds,
      });
    }
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};

// edit transaction by transaction ID controller
exports.updateTransactionById = async (req, res, next) => {
  try {
    const transaction = req.body;
    const affectedRows = await BudgetService.updateTransactionByIdService(
      transaction
    );
    if (affectedRows === 0) {
      // no rows were deleted, so the transactionIds must not exist
      return res.status(404).json({ message: "Transaction not found" });
    } else {
      // the transactions were successfully deleted
      return res
        .status(200)
        .json({ message: "Transactions successfully updated" });
    }
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
