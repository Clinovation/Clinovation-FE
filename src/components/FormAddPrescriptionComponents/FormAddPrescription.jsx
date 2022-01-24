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
function FormAddPrescription(props) {
  const { uuid,uuidMedicalRecord } = props
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    symptom: "",
    record: "",
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
    setUuidMedicine(value);
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setErrorMsg({ ...errorMsg, ...messages });
  };

  const fetchMedicine = () => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .get(`${API_URL}/medicine/`,GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorMedicine("No record found");
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
          setErrorMedicine(error.response.data.errors[0])
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
      // api/v1/recipe/?patientID=a34e5b37-c5a2-4c58-b594-dcbc749a5cc1&medicineID=532a1c2f-c79c-4490-9417-9b3d0aedcbae&medicalRecordID=d0862255-3837-4bdb-be2d-90515a7ce35f
      axios
        .post(`${API_URL}/recipe/?patientID=${uuid}&medicineID=${uuidMedicine}&medicalRecordID=${uuidMedicalRecord}`, {
          ...form,
        }, GenerateAxiosConfig())
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
            errorAdd: error.response.data.errors[0],
          });
        });
    }
    setTimeout(() => {
      alert("BERHASIL MENAMBAHKAN ");
    }, 1000);

    window.location.reload();
  };
  console.log(uuidMedicine)
  console.log("uuid medical : ", uuidMedicalRecord)
  console.log("uuid patient : ",uuid)
  return (
    <div>
      <Row className="mt-1">
        <Col md={10} className="m-auto">
          {/* <h5>Add Prescription</h5> */}
          <div
            style={{ borderTop: "2px solid black", paddingBottom: "10px" }}
          ></div>
          <Form noValidate onSubmit={onSubmit}>
            <div className="cardForm">
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
                  New Record
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="record"
                    value={form.record}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!errorMsg.record}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errorMsg.record}
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
              <Button
                type="submit"
                variant="info"
                style={{ marginLeft: "15vw", width: "10vw" }}
                to="/listPrescription"
              >
                <div style={{color : "white"}}>Save</div>
              </Button>

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
