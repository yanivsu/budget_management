import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getAllTransactions } from "../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const DashboardComponent = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // TODO get the transaction that belongs to the logged in user
  // load all the transactions initially when the component is mounted
  useEffect(() => {
    console.log("First call for data when component was mounted");
    dispatch(getAllTransactions());
  }, []);

  // subscribe the component to the store and pass to it the latest state.
  const tsStore = useSelector(
    (state) => state.transactions.filteredTransactions,
  );
  let income = tsStore.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    } else {
      return total;
    }
  }, 0);

  let expense = tsStore.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + transaction.amount;
    } else {
      return total;
    }
  }, 0);
  const user = {
    id: 1,
    name: "Ron",
  };
  // const income = 256;
  // const expense = 658;
  let currentBalance = income - expense;

  return (
    <>
      <Container>
        <h1>Budget Management</h1>
        <Card>
          <Card.Header as="h5">Hello {user.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              <ul
                className={
                  currentBalance >= 0
                    ? "text-success fw-bold"
                    : "text-danger fw-bold"
                }
              >
                Current Balance: {currentBalance} ₪
              </ul>
            </Card.Title>
            <Card.Text>
              <ul className="text-success">Total Incomes: {income} ₪</ul>
              <ul className="text-danger">Total Expenses: {expense} ₪</ul>
            </Card.Text>
            <Button
              className="ms-5"
              variant="outline-primary"
              size="sm"
              onClick={() => navigate("/table")}
            >
              Show Transactions
            </Button>{" "}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
