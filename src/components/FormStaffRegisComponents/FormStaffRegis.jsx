import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Medstaff from "../../icons/healthCare.png";
import axios from "axios";
import useValidateForm from "../../hooks/useValidateForm";
import Logo from "../../images/Logo.png";
import style from './StaffRegis.module.css'

function FormStaffRegis() {
  const { validateForm } = useValidateForm();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    nik: "",
    password: "",
    dob: "",
    sex: "male",
    email: "",
    contact: "",
    work_experience: "",
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
      const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .post(`${API_URL}/medicalStaff/register`, {
          ...form,
        })
        .then(() => {
          navigate("/");
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
                        <img src={Logo} style={{height: "100px"}}/>
                    </div>
                   

                </Row>
      <Row>
        <Col md={8} className="m-auto mt-3">
          <Card style={{backgroundColor:"#F7F7F7"}} className="p-4">
          <h5>
            <img
              src={Medstaff}
              style={{ height: "36px", marginRight: "10px" }}
            />
            Medical Staff Register
          </h5>
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
                    type="email"
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
                    type="password"
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

            <div className='d-flex justify-content-center'>
              <Button type="submit" size="lg">Register</Button>
            </div>
          </Form>
          <div className='d-flex justify-content-center mt-4'>
          <Link to="/">
            <a>Already have an account?Login</a>
          </Link>
          </div>
          </Card>
        </Col>
      </Row>
      </Container>
      <br/>
    </div>
  );
}

export default FormStaffRegis;
