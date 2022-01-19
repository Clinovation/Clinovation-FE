import { React, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../FormLoginComponents/FormLogin.module.css";
import useValidateForm from "../../hooks/useValidateForm";
import axios from "axios";
import useHandleLogin from "../../hooks/nurse/useHandleLogin";

function FormLogin() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  const handleLogin = useHandleLogin();
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setErrorMsg({ ...errorMsg, ...messages });
  };
  // const API_URL = process.env.API_URL;
  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(newErrors);
    } else {
      // const API_URL = process.env.BE_API_URL;
      const API_URL = "http://3.83.92.188:8080/api/v1";
      axios
        .post(`${API_URL}/nurse/login`, {
          ...form,
        })
        .then((res) => {
          handleLogin(res.data.data);
          console.log(res.data.data);
        })
        .catch((error) => {
          setErrorMsg({
            ...errorMsg,
            auth: error.response.data.errors[0],
          });
        });
    }
  };
  console.log(form);
  console.log(process.env.API_URL);
  return (
    <div>
      <Form noValidate onSubmit={onSubmit}>
        <div className={style.cardForm}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              name="email"
              value={form.email}
              onChange={onChange}
              onBlur={onBlur}
              isInvalid={!!errorMsg.email || !!errorMsg.auth}
            />
            <Form.Control.Feedback type="invalid">
              {errorMsg.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              name="password"
              value={form.password}
              onChange={onChange}
              onBlur={onBlur}
              isInvalid={!!errorMsg.password || !!errorMsg.auth}
            />
            <Form.Control.Feedback type="invalid">
              {errorMsg.password}
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <p className="text-danger ms-1">{errorMsg.auth}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="info" size="lg">
            Login
          </Button>
        </div>
      </Form>
      <br/>
      <div className="d-flex justify-content-center">
        <Link to="/registrasiDoctor">
          <a>Dont have an account? Sign up </a>
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
