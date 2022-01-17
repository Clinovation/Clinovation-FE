import { React, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Medstaff from "../../icons/healthCare.png";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";

function FormDoctorRegis() {
  const handleLogin = useHandleLogin();
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    name: "",
    nik: "",
    password: "",
    dob: "",
    sex: "male",
    email: "",
    contact: "",
    specialist: "pediatrician",
    work_experience: "",
    work_hour: "09.00-13.00",
    schedule: "Sunday-Wednesday-Friday",
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
  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(newErrors);
    } else {
      const API_URL = "http://3.83.92.188:8080/api/v1";
      axios
        .post(`${API_URL}/doctor/register`, {
          ...form,
        })
        .then(() => {
          // axios
          //   .post(`${API_URL}/doctor/login`, {
          //     email: form.email,
          //     password: form.password,
          //   })
          //   .then((resLogin) => {
          //     handleLogin(resLogin.data.data);
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
        })
        .catch((error) => {
          setErrorMsg({
            ...errorMsg,
            auth: error.response.data.meta.messages[0],
          });
        });
    }
  };
  console.log(form);
  return (
    <div>
      <Row>
        <Col md={6} className="m-auto formRegis-container">
          <h5>
            <img
              src={Medstaff}
              style={{ height: "36px", marginRight: "10px" }}
            />
            Doctor Register
          </h5>
          <Form noValidate onSubmit={onSubmit}>
            <div className="cardForm">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Name
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  NIK
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="nik"
                    value={form.nik}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.nik}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.nik}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Email
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.email}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  DOB
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="dob"
                    value={form.dob}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.dob}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.dob}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Sex
                </Form.Label>
                <Col md="9">
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
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Contact
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.contact}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.contact}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3">
                  Password
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.password}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Specialist
                </Form.Label>
                <Col md="9">
                  <Form.Select
                    aria-label="Default select example"
                    name="specialist"
                    value={form.specialist}
                    onChange={onChange}
                  >
                    <option disabled>Specialist</option>
                    <option value="pediatrician">Pediatrician</option>
                    <option value="dentist">Dentist</option>
                    <option value="obstetricians">Obstetricians</option>
                    <option value="otorhinolaryngology">
                      Otorhinolaryngology
                    </option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Schedule
                </Form.Label>
                <Col md="9">
                  {/* <Form.Select 
                        aria-label="Default select example"
                        name='shedule'
                        value={form.schedule}
                        onChange={onChange}
                    >
                      <option value="SundayWednesdayFriday">Sunday-Wednesday-Friday</option>
                      <option value="TuesdayWednesdaySaturday">Tuesday-Wednesday-Saturday</option>
                    </Form.Select> */}

                  <Form.Select
                    aria-label="Default select example"
                    name="schedule"
                    value={form.schedule}
                    onChange={onChange}
                  >
                    <option value="Sunday-Wednesday-Friday">
                      Sunday-Wednesday-Friday
                    </option>
                    <option value="Tuesday-Wednesday-Saturday">
                      Tuesday-Wednesday-Saturday
                    </option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Hour
                </Form.Label>
                <Col md="9">
                  <Form.Select
                    aria-label="Default select example"
                    name="work_hour"
                    value={form.work_hour}
                    onChange={onChange}
                  >
                    <option value="09.00-13.00">09.00-13.00</option>
                    <option value="13.00-17.00">13.00-17.00</option>
                    <option value="17.00-21.00">17.00-21.00</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Experience
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="work_experience"
                    value={form.work_experience}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.work_experience}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.work_experience}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>

            <div>
              <Button type="submit">Register</Button>
            </div>
          </Form>
          <Link to="/">
            <a>Already have an account?Login</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default FormDoctorRegis;
