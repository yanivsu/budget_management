import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form, Row, FormLabel } from "react-bootstrap";
import {
  addTransaction,
  updateTransaction,
} from "../actions/transactionAction";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function TransactionFormComponent({
  transaction: initialTransaction = null,
}) {
  const location = useLocation();
  // use transaction object from the state for Update or an initial empty transaction for Add
  const transaction = location.state?.transaction || initialTransaction;
  const isUpdating = Boolean(transaction); // true if updating, false if creating

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    if (transaction) {
      setValue("transaction_id", transaction.transaction_id);
      setValue("transaction_name", transaction.transaction_name);
      setValue("transaction_details", transaction.transaction_details);
      setValue("amount", transaction.amount);
      const date = new Date(transaction.date);
      const formattedDate = date.toISOString().split("T")[0];
      setValue("date", formattedDate);
      setValue("type", transaction.type);
    }
  }, [transaction, setValue]);

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    dispatch(addTransaction(data));
    setTimeout(() => {
      navigate("/table");
      setLoading(false);
    }, 1500); // 1500ms delay
  };
  // TODO when submiting update, form refresh and nothing happens
  const updateHandler = (data) => {
    setLoading(true);
    console.log(data);
    dispatch(updateTransaction(data));
    setTimeout(() => {
      navigate("/table");
      setLoading(false);
    }, 1500); // 1500ms delay
  };

  const clearForm = () => reset();
  const goBack = () => navigate("/table");

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="mb-3">
        <h2>{isUpdating ? "Update a Transaction" : "Add a Transaction"}</h2>{" "}
      </Row>
      <Form
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={isUpdating ? updateHandler : handleSubmit(onSubmit)}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group controlId="transaction_name">
          <Form.Label>Transaction Name:</Form.Label>
          <Form.Control
            type="text"
            {...register("transaction_name", { required: true })}
            isInvalid={errors.transaction_name}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="transaction_details">
          <FormLabel>Transaction Details:</FormLabel>
          <Form.Control
            type="text"
            {...register("transaction_details", { required: true })}
            isInvalid={errors.transaction_details}
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
            <option value="">Select Transaction Type...</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center mt-2">
          <Button
            className=""
            variant="outline-primary"
            size="sm"
            type="button"
            // onClick={navigate("/table")}
            onClick={goBack}
          >
            Go back
          </Button>
          <Button
            className="mx-2 "
            variant="outline-primary"
            size="sm"
            type="submit"
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
            ) : isUpdating ? (
              "Update"
            ) : (
              "Add"
            )}
          </Button>
          <Button
            className=" "
            variant="outline-primary"
            size="sm"
            type="button"
            onClick={clearForm}
          >
            Clear
          </Button>
        </div>
      </Form>
    </Container>
  );
}
