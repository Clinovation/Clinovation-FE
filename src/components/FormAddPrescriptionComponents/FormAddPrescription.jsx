import { React, useEffect, useState } from "react";
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";

import { API_URL } from "../../utils/const";
function FormAddPrescription() {
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    date: "",
    symptom: "",
    patient: "",
    new_record: "",
    note: "",
    consumption_rule: "",
  });
  const [medicine, setMedicine] = useState({
    data: [],
  })

  const [uuidMedicine, setUuidMedicine] = useState("")

  const [errorMsg, setErrorMsg] = useState({});
  const [errorMedicine, setErrorMedicine] = useState("")

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onChangeUuid = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUuidMedicine({ ...uuidMedicine, [name]: value });
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setErrorMsg({ ...errorMsg, ...messages });
  };

  const fetchMedicine = () => {
    const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .get(`${API_URL}/medicine/`)
      .then((res) => {
        if (res.status === 204) {
          // setErrorWork({ ...errorWork, workDay: "No record found" });
        } else {
          setMedicine((state) => {
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
          setErrorMedicine(error.response.data.meta.messages[0])
          console.log(error);
        }
      });
  };

  useEffect(()=>{
    fetchMedicine()
  }, [setMedicine])

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(newErrors);
    } else {
      // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .post(`${API_URL}/recipe/`, {
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
    setTimeout(() => {
      alert("BERHASIL MENAMBAHKAN ");
    }, 1000);

    window.location.reload();
  };

  return (
    <div>
      <Row className="mt-1">
        <Col md={10} className="m-auto">
          {/* <h5>Add Prescription</h5> */}
          <div
            style={{ borderTop: "2px solid black", paddingBottom: "10px" }}
          ></div>
          <Form noValidate>
            <div className="cardForm">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Date
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.date}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.date}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Patient
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="patient"
                    value={form.patient}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.patient}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.patient}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Symptom
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="symptom"
                    value={form.symptom}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.symptom}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.symptom}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Consumption Rule
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="consumption_rule"
                    value={form.consumption_rule}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.consumption_rule}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.consumption_rule}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Note
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="note"
                    value={form.note}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.note}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.note}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  New Record
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="new_record"
                    value={form.new_record}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.new_record}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.new_record}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column md="3">
                      Medicine
                    </Form.Label>
                    <Col md="9">
                      <Form.Select
                        aria-label="Default select example"
                        name="medicine"
                        value={uuidMedicine}
                        onChange={onChangeUuid}
                      >
                        <option>Medicine</option>
                        {medicine?.data?.map((item) => (
                          <option value={item.uuid}>{item.name}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Form.Group>
            </div>
            <Link to="/listPrescription">
              <Button
                type="submit"
                variant="info"
                style={{ marginLeft: "15vw", width: "10vw" }}
                onClick={onSubmit}
              >
                <div style={{color : "white"}}>Save</div>
              </Button>
            </Link>

            {/* <Link to="/listPrescription">
                        <Button type="submit" variant="warning">Back</Button>   
                    </Link> */}
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default FormAddPrescription;
