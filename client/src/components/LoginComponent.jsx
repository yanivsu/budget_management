import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { checkCredentials } from "../actions/userActions";
// login component using react-hook-form that dispatches the credentials and
// notify the user if his credentials is wrong
export const LoginComponent = () => {
  let navigate = useNavigate(); // YANIV: why not const ??
  const dispatch = useDispatch();
  const isValidUser = useSelector((state) => state.user.isValidUser);
  const error = useSelector((state) => state.user.error);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isValidUser) {
      navigate("/dashboard"); // navigate to home after login
      setLoading(false);
    }
  }, [isValidUser]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // YANIV: This is call customHook and why is use. it can be question for you in interview....

  const onSubmit = (data) => {
    setLoading(true);
    // dispatching the credentials to the action
    dispatch(checkCredentials(data.username, data.password));
    setTimeout(() => {}, 1500);
  };

  const clearForm = () => reset();

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="mb-3">
        <h2>Login</h2>
      </Row>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register("username", { required: true })}
            isInvalid={errors.username}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: true })}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            This field is required
          </Form.Control.Feedback>
        </Form.Group>
        {/*display error message if it exists*/}
        {error && <p className="text-danger">{error}</p>}
        <div className="d-flex justify-content-center">
          <Button className="mt-2 " variant="primary" size="sm" type="submit">
            {/* YANIV: Consider to move it to sperate component and not on the code in this case 
              for example: 
               if (loading) {
                  return <h1>Loading...</h1>;
                }
                if (error) {
                  return <h1>Error...</h1>;
                }
            */}
            {loading && !error ? (
              <Spinner
                className="me-2"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Login"
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
        </div>
      </Form>
    </Container>
  );
};
