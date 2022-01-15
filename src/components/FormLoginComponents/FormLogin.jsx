import { React, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../FormLoginComponents/FormLogin.module.css";

function FormLogin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className={style.cardForm}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <br />

        <Link to="/dashboardDoctor">
          <Button type="submit">Login</Button>
        </Link>
      </Form>
    </div>
  );
}

export default FormLogin;
