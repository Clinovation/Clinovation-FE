import { React, useState } from "react";
import Cookies from "universal-cookie";
import { logout } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { login } from "../../Redux/UserSlice";

import { Link } from "react-router-dom";
import { API_URL } from "../../utils/const";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styles from "../staffProfileFormComponents/ProfileForm.module.css";
import useValidateForm from "../../hooks/useValidateForm";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";

export default function ProfileForm() {
  // const [contact, setContact] = useState();
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { validateForm } = useValidateForm();

  const user = useSelector((state) => state.user);
  const initialValue = {
    name: user.name,
    nik: user.nik,
    work_experience: user.work_experience,
    email: user.email,
    password: "",
    dob: user.dob,
    sex: user.sex,
    contact: user.contact,
  };

  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});

  const onClick = () => {
    dispatch(logout());
    cookies.remove("token", { path: "/", domain: window.location.hostname });
    if (window.location.pathname.includes("profile")) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  const updateProfile = (data) => {
    // const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .put(
        `${API_URL}/medicalStaff/`,
        {
          ...data,
        },
        GenerateAxiosConfig()
      )
      .then(() => {
        dispatch(login(data));
      })
      .catch((error) => {
        HandleUnauthorized(error.response);
        console.log(error);
      });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setError({ ...error, ...messages });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      const newData = {
        name: form.name,
        nik: form.nik,
        work_experience: form.work_experience,
        email: form.email,
        password: form.password,
        dob: form.dob,
        sex: form.sex,
        contact: form.contact,
      };

      updateProfile(newData);
    }
  };

  console.log("error : ", error);
  console.log("form : ", form);

  return (
    <div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <Card.Body>
            <Form noValidate onSubmit={onSubmit}>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  NIK
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="nik"
                    value={form.nik}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.nik}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.nik}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextPassword"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.password}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="dob"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Date of Birth
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="dob"
                    value={form.dob}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.dob}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.dob}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Sex
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select example"
                    name="sex"
                    value={form.sex}
                    onChange={onChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.email}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Contact
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.contact}
                  />
                  {/* <PhoneInput
                    defaultCountry="ID"
                    value={contact}
                    onChange={setContact}
                    international
                    countryCallingCodeEditable={false}
                  /> */}
                  <Form.Control.Feedback type="invalid">
                    {error.contact}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Work Experience
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="work_experience"
                    value={form.work_experience}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.work_experience}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.work_experience}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Button
                variant="outline-success"
                type="submit"
                className={`${styles.tombol}`}
              >
                Save
              </Button>{" "}
              <Link to="/dashboardStaff" className="m-auto">
                <Button
                  variant="outline-warning"
                  className={`${styles.tombol}`}
                >
                  Back to Home
                </Button>{" "}
              </Link>
              <Button
                variant="outline-danger"
                className={`${styles.tombol2}`}
                onClick={onClick}
              >
                Logout
              </Button>{" "}
            </Form>
            <br />
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      {/* <Button
          variant="outline-success"
          type="submit"
          className={`${styles.tombol}`}
        >
          Save
        </Button>{" "} */}
    </div>
  );
}
