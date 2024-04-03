import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getAllTransactions } from "../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { CurrentBalance } from "./CurrentBalance";

export const DashboardComponent = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = {
    id: localStorage.getItem("userId"),
    name: localStorage.getItem("userName"),
  };

  // TODO get the transaction that belongs to the logged in user
  // load all the transactions initially when the component is mounted
  useEffect(() => {
    console.log("First call for data when component was mounted");
    dispatch(getAllTransactions(user.id));
  }, []);

  // get the states form the store
  const currentBalance = useSelector(
    (state) => state.transactions.currentBalance,
  );
  const totalIncome = useSelector((state) => state.transactions.totalIncome);
  const totalExpense = useSelector((state) => state.transactions.totalExpense);

  return (
    <>
      <Container>
        <h1>Budget Management</h1>
        <Card>
          <Card.Header as="h5">Hello {user.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              <CurrentBalance currentBalance={currentBalance} />
            </Card.Title>
            <Card.Text>
              <ul className="text-success">Total Incomes: {totalIncome} ₪</ul>
              <ul className="text-danger">Total Expenses: {totalExpense} ₪</ul>
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
