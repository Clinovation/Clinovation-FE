import { React, useState, useEffect } from "react";
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import useValidateForm from "../../hooks/useValidateForm";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import { login } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils/const";
function FormUpdatePrescription(props) {
  const { uuid } = props;
  const { validateForm } = useValidateForm();
  
  const initialValue = {
      symptom: "",
      record: "",
      consumption_rule: "",
  };

  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});

  const [medicine, setMedicine] = useState({
    data: [],
  })
  const [uuidMedicine, setUuidMedicine] = useState("")
  const [errorMedicine, setErrorMedicine] = useState("")

  const onChangeUuid = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUuidMedicine(value);
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
      axios
        .put(`${API_URL}/recipe/${uuid}`, { ...form }, GenerateAxiosConfig())
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
  console.log(uuidMedicine)
  console.log("uuidPrescription: ",uuid)
  console.log("form: ", form)
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
                  New Record
                </Form.Label>
                <Col md="9">
                  <Form.Control 
                    type="text" 
                    name="record"
                    value={form.record}
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={!!error.record}
                
                />
                  <Form.Control.Feedback type="invalid">
                    {error.record}
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
                onClick={onSubmit}
                to="/listPrescription"
              >
                <div style={{color: "white"}}>Save</div>
              </Button>
          </Form>
        </Col>
      </Row>
    </div>
);
}

export default FormUpdatePrescription;
