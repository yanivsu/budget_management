import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { deleteTransactions } from "../actions/transactionAction";

// subscribe the component to the store and pass to it the latest state.
export const TransactionInfoComponent = () => {
  const { transactionId } = useParams();
  // subscribe to the store and get the state
  const tsStore = useSelector(
    (state) => state.transactions.filteredTransactions,
  );
  // find the wanted transaction by its id
  const transaction = tsStore.find(
    (transaction) => transaction.transaction_id === parseInt(transactionId),
  );
  console.log(transaction);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  const goBack = () => navigate("/table");

  /*** Handlers ***/
  const updateTransactionHandler = () => {
    navigate("/transaction", { state: { transaction } });
  };
  const deleteSelectedHandler = () => {
    console.log();
    dispatch(deleteTransactions([transactionId], userId));
    setTimeout(() => {
      setLoading(true);
      navigate("/table");
      setLoading(false);
    }, 1500); // 1500ms delay
  };

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {/*<FontAwesomeIcon icon={faPenToSquare} />*/}
        <Row className="mb-3">
          <h2>Transaction Information</h2>
        </Row>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Transaction ID: {transactionId}</Card.Header>
          <Card.Body>
            <Card.Title>Name: {transaction.transaction_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Date: {new Date(transaction.date).toLocaleDateString()}
            </Card.Subtitle>
            <Card.Text>
              Details: {transaction.transaction_details}
              <br />
              Amount: {transaction.amount}
              <br />
              Type: {transaction.type}
            </Card.Text>
            <ButtonGroup className="d-flex justify-content-center">
              <Button variant="outline-primary" size="sm" onClick={goBack}>
                Back{" "}
              </Button>
              <Button
                className="mx-2"
                variant="outline-primary"
                size="sm"
                onClick={updateTransactionHandler}
              >
                Edit Transaction{" "}
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={deleteSelectedHandler}
              >
                {loading ? (
                  <Spinner
                    className="me-2"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Delete"
                )}
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
