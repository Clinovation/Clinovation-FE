import React, { useState } from "react";
import axios from "axios";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import { Form, Button, Row, Col } from "react-bootstrap";
import useValidateForm from "../../hooks/useValidateForm";
import { API_URL } from "../../utils/const";
export default function FormAddMedicine() {
  const { validateForm } = useValidateForm();
  const initialValue = {
    name: "",
    type: "",
    price: "",
    stock: "",
  };

  const [form, setForm] = useState(initialValue);

  const [error, setError] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "price") {
      value = parseInt(value);
    }

    if (name === "stock") {
      value = parseInt(value);
    }

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
        .post(`${API_URL}/medicine/`, { ...form }, GenerateAxiosConfig())
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
  };

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  console.log("error", error);
  console.log("form", form);
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
                  Name
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Type
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="text"
                    name="type"
                    value={form.type}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.type}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.type}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Price
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.price}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.price}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Stock
                </Form.Label>
                <Col md="9">
                  <Form.Control
                    type="number"
                    name="stock"
                    value={form.stock}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.stock}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.stock}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>
            <Button
              type="submit"
              variant="info"
              style={{ marginLeft: "15vw", width: "10vw" }}
              to="/listMedicine"
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
