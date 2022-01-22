import React, { useEffect, useState } from "react";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Medstaff from "../../icons/healthCare.png";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";
import style from "./DoctorRegis.module.css";
import Logo from "../../images/Logo.png";

function FormDoctorRegis() {
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    name: "",
    nik: "",
    password: "",
    dob: "",
    sex: "male",
    email: "",
    contact: "",
    specialist: "specialist",
    work_experience: "",
  });

  const [workDay, setWorkDay] = useState({
    data: [],
  });

  const [uuidWork, setUuidWork] = useState({
    day: "",
    hour: "",
  });

  const [workHour, setWorkHour] = useState({
    data: [],
  });

  const [errorMsg, setErrorMsg] = useState({});
  const [errorWork, setErrorWork] = useState({ workDay: "", workHour: "" });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onChangeUuid = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUuidWork({ ...uuidWork, [name]: value });
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setErrorMsg({ ...errorMsg, ...messages });
  };

  const fetchWorkDay = () => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/workDay/`)
      .then((res) => {
        if (res.status === 204) {
          // setErrorWork({ ...errorWork, workDay: "No record found" });
        } else {
          setWorkDay((state) => {
            return {
              ...state,
              data: res.data.data,
            };
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorWork({
            ...errorWork,
            workDay: error.response.data.errors[0],
          });
          console.log(error);
        }
      });
  };

  const fetchWorkHour = () => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/workHour/`)
      .then((res) => {
        if (res.status === 204) {
          // setErrorWork({ ...errorWork, workHour: "No record found" });
        } else {
          setWorkHour((state) => {
            return {
              ...state,
              data: res.data.data,
            };
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorWork({
            ...errorWork,
            workHour: error.response.data.errors[0],
          });
          console.log(error);
        }
      });
  };

  useEffect(() => {
    fetchWorkDay();
    fetchWorkHour();
  }, [setWorkDay, setWorkHour]);

  console.log(uuidWork);
  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(newErrors);
    } else {
      const API_URL = "http://3.83.92.188:8080/api/v1";
      axios
        .post(
          `${API_URL}/doctor/register?workDayID=${uuidWork.day}&workHourID=${uuidWork.hour}`,
          {
            ...form,
          }
        )
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
            auth: error.response.data.errors[0],
          });
        });
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <img src={Logo} style={{ height: "100px" }} />
          </div>
        </Row>
        <Row>
          <Col md={8} className="m-auto mt-3">
            <Card style={{ backgroundColor: "#F7F7F7" }} className="p-4">
              <h3>
                <img
                  src={Medstaff}
                  style={{ height: "36px", marginRight: "10px" }}
                />
                Doctor Register
              </h3>
              <Form noValidate onSubmit={onSubmit}>
                <div className={style.cardForm}>
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
                        <option>Specialist</option>
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
                      Work Day
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
                        name="day"
                        value={uuidWork.day}
                        onChange={onChangeUuid}
                      >
                        <option>work day</option>
                        {workDay?.data?.map((item) => (
                          <option value={item.uuid}>{item.day}</option>
                        ))}
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
                        name="hour"
                        value={uuidWork.hour}
                        onChange={onChangeUuid}
                      >
                        <option>work hour</option>
                        {workHour?.data?.map((item) => (
                          <option value={item.uuid}>{item.hour}</option>
                        ))}
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

                <div className="d-flex justify-content-center">
                  <Button type="submit" size="lg">
                    Register
                  </Button>
                </div>
              </Form>
              <div className="d-flex justify-content-center mt-4">
                <Link to="/">
                  <a>Already have an account?Login</a>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default FormDoctorRegis;
