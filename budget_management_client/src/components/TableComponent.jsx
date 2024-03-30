import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {getAllTransactions} from '../actions/TransactionAction'

// component that shows all transaction
// export const TableComponent = ({ transactions }) => {
export const TableComponent = () => {
  const dispatch = useDispatch();
  // subsribe the component to the store and pass to it it's latest state.
  const tsStore = useSelector((state) => state.filteredTransactions);

  const getTrsHandler = () => {
    dispatch({ type: "getAllTransactions" });
    console.log(tsStore);
  };
  const addTransactionHandler = () => {
    dispatch({ type: "addTransaction" });
  };
  const payloadObject = {};
  const addWithPayloadHandler = () => {
    dispatch({ type: "addWithPayload", payload: payloadObject });
  };

  /*** selected all/income/expense section ***/
  const [selectedRows, setSelectedRows] = useState([]);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "All", value: "1" },
    { name: "Income", value: "2" },
    { name: "Expense", value: "3" },
  ]; //
  const handleRadioChange = (value) => {
    setRadioValue(value);
    if (value === "2") {
      dispatch({ type: "showIncome" });
    } else if (value === "3") {
      dispatch({ type: "showExpense" });
    } else {
      dispatch({ type: "getAllTransactions" });
    }
  };
  /*** selected all/income/expense section ***/

  /******* functions *******/
  // handleSelectedRow hold only the id's of the selected rows
  const handleSelectedRow = (id) => {
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
    <>
      {/****buttons****/}
      <Button size="sm" onClick={addTransactionHandler}>
        Add Transaction
      </Button>
      <Button size="sm" onClick={() => setSelectedRows([])}>
        Clear Selection
      </Button>
      <Button
        size="sm"
        onClick={() => {
          // console.log(ts)
        }}
      >
        Remove Selected
      </Button>
      <Button size="sm" onClick={getTrsHandler}>
        Get Transaction{" "}
      </Button>
      {/****buttons****/}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/*<div>*/}
        {/*<ButtonGroup className="d-flex justify-content-center">*/}
        <ButtonGroup className="my-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => handleRadioChange(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Income/Expense</th>
          </tr>
        </thead>
        <tbody>
          {/*maps over hardcoded data*/}
          {tsStore.map((transaction) => (
            // {transactions.transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td>
                <Form.Check
                  type="checkbox"
                  checked={selectedRows.includes(transaction.transaction_id)}
                  onChange={() => handleSelectedRow(transaction.transaction_id)}
                />
              </td>
              <td>{transaction.transaction_id}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.transaction_name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

// const [ts, setTs] = useState({})
//
// // get all the transactions and set them in the transaction state
// // run only once at mount
// useEffect(() => {
//     const fetchTransactions = async () => {
//         const allTransactions = await getAllTransactions();
//         if (allTransactions) {
//             setTs(allTransactions);
//             console.log(allTransactions);
//         } else {
//             console.log('No transactions returned');
//         }
//     };
//
//     fetchTransactions();
// }, []);
