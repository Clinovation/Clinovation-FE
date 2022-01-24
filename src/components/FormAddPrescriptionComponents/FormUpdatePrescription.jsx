import { React, useState } from "react";
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import { login } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils/const";
function FormUpdatePrescription() {
    const { validateForm } = useValidateForm();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const initialValue = {
        date: user.date,
        symptom: user.symptom,
        patient: user.patient,
        new_record: user.new_record,
        note: user.note,
        consumption_rule: user.consumption_rule,
        medicine: user.medicine,
    };

    const [form, setForm] = useState(initialValue);
    const [error, setError] = useState({});

    const updatePrescription = (data) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .put(
        `${API_URL}/recipe/`,
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
            date: form.date,
            symptom: form.symptom,
            patient: form.patient,
            medicine: form.medicine,
            note: form.note,
            consumption_rule: form.consumption_rule,
            new_record: form.new_record,
        };

        updatePrescription(newData);
        }
      
      window.location.reload();
    
      setTimeout(() => {
      alert("BERHASIL MENGHAPUS ");
      }, 1000);
    };
  return (
    <div>
        <Row className="mt-1">
        <Col md={10} className="m-auto">
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
                    isInvalid={!!error.date}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.date}
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
                    isInvalid={!!error.patient}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.patient}
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
                    isInvalid={!!error.symptom}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.symptom}
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
                    isInvalid={!!error.consumption_rule}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.consumption_rule}
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
                    isInvalid={!!error.note}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.note}
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
                    isInvalid={!!error.new_record}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.new_record}
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
                <div style={{color: "white"}}>Save</div>
                
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

export default FormUpdatePrescription;
