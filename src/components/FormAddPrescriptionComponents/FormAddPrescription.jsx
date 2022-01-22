import { React, useState } from "react";
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";

function FormAddPrescription() {
  const { validateForm } = useValidateForm();
  const [form, setForm] = useState({
    date: "",
    symptom: "",
    patient: "",
    new_record: "",
    note: "",
    consumption_rule: "",
    medicine: "",
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid date.
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid patient.
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid symptom.
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid consumption rule.
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid note.
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
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid record.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Medicine Name</th>

                    <th>Choose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
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
