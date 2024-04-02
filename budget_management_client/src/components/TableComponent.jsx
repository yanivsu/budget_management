import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button, ButtonGroup, Pagination, ToggleButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  GET_ALL_TRANSACTIONS,
  SHOW_INCOME,
  SHOW_EXPENSE,
  SHOW_ALL_TRANSACTIONS,
  getAllTransactions,
  DELETE_TRANSACTIONS,
  deleteTransactions,
} from "../actions/transactionAction";
import Container from "react-bootstrap/Container";

// component that shows all transaction
export const TableComponent = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // load all the transactions initially when the component is mounted
  useEffect(() => {
    console.log("First call for data when component was mounted");
    dispatch(getAllTransactions());
  }, []);

  // subscribe the component to the store and pass to it the latest state.
  const tsStore = useSelector(
    (state) => state.transactions.filteredTransactions,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const transactionsOnCurrentPage = tsStore.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  /*** selected all/income/expense  ***/
  const [selectedRows, setSelectedRows] = useState([]);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "All", value: "1" },
    { name: "Income", value: "2" },
    { name: "Expense", value: "3" },
  ]; //

  /*** Handlers ***/

  const handleRadioChange = (value) => {
    setRadioValue(value);
    if (value === "2") {
      dispatch({ type: SHOW_INCOME });
    } else if (value === "3") {
      dispatch({ type: SHOW_EXPENSE });
    } else {
      dispatch({ type: SHOW_ALL_TRANSACTIONS });
    }
  };
  const addTransactionHandler = () => {
    navigate("/transaction");
    // dispatch({ type: ADD_TRANSACTION });
  };

  const updateTransactionHandler = (transaction) => {
    navigate("/transaction", { state: { transaction } });
  };

  const deleteSelectedHandler = () => {
    dispatch(deleteTransactions(selectedRows));
  };

  // selectedRowHandler hold only the id's of the selected rows
  const selectedRowHandler = (id) => {
    setSelectedRows((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((itemId) => itemId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  /******* functions *******/

  return (
    <Container>
      <h2>Transaction Table</h2>
      {/****buttons****/}
      <div className="d-flex justify-content-center ">
        <ButtonGroup>
          <Button
            className="me-1"
            variant="outline-primary"
            size="sm"
            onClick={() => setSelectedRows([])}
          >
            Clear Selection
          </Button>
          <Button
            className="me-1"
            variant="outline-primary"
            size="sm"
            onClick={addTransactionHandler}
          >
            Add Transaction
          </Button>

          <Button
            className="me-1"
            variant="outline-primary"
            size="sm"
            onClick={deleteSelectedHandler}
          >
            Delete Selected Transactions
          </Button>
          {/*can edit only one selected transaction*/}
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => {
              if (selectedRows.length === 1) {
                // gets the transaction data from te store
                const transactionToEdit = tsStore.find(
                  (transaction) =>
                    transaction.transaction_id === selectedRows[0],
                );
                updateTransactionHandler(transactionToEdit);
              } else {
                console.log("Please select exactly one transaction to edit.");
              }
            }}
          >
            Edit Transaction
          </Button>
        </ButtonGroup>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*<ButtonGroup className="d-flex justify-content-center">*/}
        <ButtonGroup className="my-2">
          {radios.map((radio, idx) => {
            // changing buttons color
            let variant;
            switch (idx) {
              case 0:
                variant = "outline-secondary";
                break;
              case 1:
                variant = "outline-success";
                break;
              case 2:
                variant = "outline-danger";
                break;
            }

            return (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={variant}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => handleRadioChange(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            );
          })}
        </ButtonGroup>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            {/*<th>ID</th>*/}
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Income/Expense</th>
          </tr>
        </thead>
        <tbody>
          {/*maps over hardcoded data*/}
          {transactionsOnCurrentPage.map((transaction) => (
            // {tsStore.map((transaction) => (
            <tr
              key={transaction.transaction_id}
              // A click on the row would navigate to the info transaction component with the transaction_id in the url

              onClick={() =>
                navigate(`/transactionInfo/${transaction.transaction_id}`)
              }
            >
              <td className="d-flex justify-content-center ">
                {/*when clicking the checkbox it would select and prevent with event.stopPropagation();
                                the parent element to activate the navigate to transaction info */}
                <Form.Check
                  type="checkbox"
                  checked={selectedRows.includes(transaction.transaction_id)}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  onChange={() =>
                    selectedRowHandler(transaction.transaction_id)
                  }
                />
              </td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.transaction_name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center ">
        {/*the pagination element shows X transactions (set in itemsPerPage)*/}
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          />
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next
            onClick={() =>
              setCurrentPage((old) =>
                Math.min(old + 1, Math.ceil(tsStore.length / itemsPerPage)),
              )
            }
          />
        </Pagination>
      </div>
    </Container>
  );
};
