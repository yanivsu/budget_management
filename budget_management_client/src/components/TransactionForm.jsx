import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form, Row } from "react-bootstrap";
import { addTransaction } from "../actions/transactionAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function TransactionForm() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    dispatch(addTransaction(data));
    setTimeout(() => {
      navigate("/table");
      setLoading(false);
    }, 1500); // 5000ms delay
  };

  const clearForm = () => reset();
  const goBack = () => navigate("/table");

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="mb-3">
        <h2>Add a Transaction</h2>
      </Row>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group controlId="transaction_name">
          <Form.Label>Transaction Name:</Form.Label>
          <Form.Control
            type="text"
            {...register("transaction_name", { required: true })}
            isInvalid={errors.transactionName}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            type="number"
            {...register("amount", { required: true, pattern: /^[0-9]+$/ })}
            isInvalid={errors.amount}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid amount
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            {...register("date", { required: true })}
            isInvalid={errors.date}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>
        {/*TODO add arrow dropdown*/}
        <Form.Group controlId="type">
          <Form.Label>Type:</Form.Label>
          <Form.Control as="select" {...register("type", { required: true })}>
            <option value="">Select...</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button className="mt-2 " variant="primary" size="sm" type="submit">
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
              "Submit"
            )}
          </Button>
          <Button
            className="mt-2 mx-2 "
            variant="primary"
            size="sm"
            type="button"
            onClick={clearForm}
          >
            Clear
          </Button>
          <Button
            className="mt-2 "
            variant="primary"
            size="sm"
            type="button"
            // onClick={navigate("/table")}
            onClick={goBack}
          >
            Go back
          </Button>
        </div>
      </Form>
    </Container>
  );
}
