import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";

export const DashboardComponent = () => {
  const user = {
    id: 1,
    name: "Ron",
  };
  const income = 256;
  const expense = 658;
  let currentBalance = income - expense;

  return (
    <>
      <Container>
        <h1>Budget Management</h1>
        <Row>
          <Col>
            <h3 className="text-center">Hello {user.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul
              className={
                currentBalance >= 0
                  ? "text-success fw-bold"
                  : "text-danger fw-bold"
              }
            >
              Current Balance: {currentBalance}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="text-success">Total Incomes: {income}</ul>
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => console.log("income clicked")}
            >
              Show incomes
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="text-danger">Total Expenses: {expense}</ul>
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => console.log("expense clicked")}
            >
              Show Expenses
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
