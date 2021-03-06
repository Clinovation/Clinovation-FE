import React, { useState } from "react";
import { Form, Button, Col, FloatingLabel, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../FormLoginComponents/FormLogin.module.css";
import useValidateForm from "../../hooks/useValidateForm";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import { API_URL } from "../../utils/const";
import Logo from "../../images/Logo.png";
import ForgetPassDoctor from "../ForgetPasswordComponents/ForgetPassDoctor";
import Doctor from "../../icons/doctor.png";

function ModalForgetPass(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            <img src={Doctor} style={{ height: "50px", marginRight: "10px" }} />
            Forget Password Doctor
          </h4>
        </div>
        <ForgetPassDoctor />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function FormLogin() {
  const [modalShow, setModalShow] = React.useState(false);
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
      // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .post(`${API_URL}/doctor/login`, {
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
    setTimeout(() => {
      alert("BERHASIL LOGIN");
    }, 1000);
  };

  return (
    <div>
      <ModalForgetPass show={modalShow} onHide={() => setModalShow(false)} />
      <Form noValidate onSubmit={onSubmit}>
        <div className={style.cardForm}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
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
          <a
            style={{ cursor: "pointer", color: "blue" }}
            className="d-flex justify-content-end"
            onClick={() => setModalShow(true)}
          >
            Forget Password
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="info" size="lg">
            <div style={{ color: "white" }}>Login</div>
          </Button>
        </div>
      </Form>
      <br />
      <div className="d-flex justify-content-center">
        <Link to="/registrasiDoctor">
          <a>Dont have an account? Sign up </a>
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
