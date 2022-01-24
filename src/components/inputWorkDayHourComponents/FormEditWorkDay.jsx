import React, { useState } from "react";
import axios from "axios";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import { Form, Button, Row, Col } from "react-bootstrap";
import useValidateForm from "../../hooks/useValidateForm";
import { API_URL } from "../../utils/const";
export default function FormEditWorkDay(props) {
  const { uuid } = props;
  const { validateForm } = useValidateForm();
  const initialValue = {
    day: "",
  };

  const [form, setForm] = useState(initialValue);

  const [error, setError] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
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
      // const API_URL = process.env.BE_API_URL;
      // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .put(`${API_URL}/workDay/${uuid}`, { ...form }, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setError("No record found");
          } else if (res.status === 403) {
            setError("Forbiden");
          } else if (res.status === 500) {
            setError("Internal Server Error");
          }
        })
        .catch((error) => {
          if (error.response) {
            HandleUnauthorized(error.response);
            setError(error.response.data.errors[0]);
            console.log(error);
          }
        });
    }
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
          <Form noValidate onSubmit={onSubmit}>
            <div className="cardForm">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Day
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="day"
                    value={form.day}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.day}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.day}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>

            <Button
              type="submit"
              variant="info"
              style={{ marginLeft: "15vw", width: "10vw" }}
              to="/listWorkDayHour"
            >
              <div style={{color:"white"}}>
                Save
              </div>
              
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
