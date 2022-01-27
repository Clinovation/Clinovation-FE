import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import Medstaff from "../../icons/healthCare.png";
import style from "./FormPatient.module.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import useValidateForm from "../../hooks/useValidateForm";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";

import { API_URL } from "../../utils/const";
function FormPatientRegis() {
  const { validateForm } = useValidateForm();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    nik: "",
    dob: "",
    sex: "male",
    address: "",
    contact: "",
    status_martial: "married",
    height: "",
    weight: "",
    record: "",
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
      // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .post(
          `${API_URL}/patient/register`,
          {
            ...form,
          },
          GenerateAxiosConfig()
        )
        .then((response) => {
          // navigate("/");
          console.log(response);
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
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <Link to={"/dashboardStaff"}>
              <img src={Logo} style={{ height: "100px" }} />
            </Link>
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
                Patient Register
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
                      Address
                    </Form.Label>
                    <Col md="9">
                      <Form.Control
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={!!errorMsg.address}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorMsg.address}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column md="3">
                      Height
                    </Form.Label>
                    <Col md="9">
                      <Form.Control
                        type="text"
                        name="height"
                        value={form.height}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={!!errorMsg.height}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorMsg.height}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column md="3">
                      Weight
                    </Form.Label>
                    <Col md="9">
                      <Form.Control
                        type="text"
                        name="weight"
                        value={form.weight}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={!!errorMsg.weight}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorMsg.weight}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column md="3">
                      Martial Status
                    </Form.Label>
                    <Col md="9">
                      <Form.Select
                        aria-label="Default select example"
                        name="status_martial"
                        value={form.status_martial}
                        onChange={onChange}
                      >
                        <option value="married">Married</option>
                        <option value="notMarried">Not Married</option>
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

                  <div
                    style={{ borderTop: "2px solid black", padding: "10px" }}
                  ></div>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Patient Medical Record</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="record"
                      rows={8}
                      value={form.record}
                      onChange={onChange}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                  <Button type="submit" variant="info" size="lg">
                    <div style={{ color: "white" }}>Register</div>
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormPatientRegis;
