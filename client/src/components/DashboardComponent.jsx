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

  // load all the user's transactions initially when the component is mounted
  useEffect(() => {
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
            <Card.Text className="ms-5">
              <div className="text-success">Total Incomes: {totalIncome} ₪</div>
              <div className="text-danger">
                Total Expenses: {totalExpense} ₪
              </div>
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
