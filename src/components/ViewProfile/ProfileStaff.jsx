import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Avatar from "../../icons/staffProfile.png";
import SideBarMedStaff from "../SideBarMedStaffComponents/SideBarMedStaff";
import style from "./ViewProfile.module.css";
import { Link } from "react-router-dom";

function ProfileStaff() {
  const { uuid } = useParams();
  const initialValue = {
    name: "",
    nik: "",
    work_experience: "",
    dob: "",
    sex: "",
    email: "",
    contact: "",
    avatar: "",
  };
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState();

  const fetch = (uuid) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/medicalStaff/${uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else if (res.status === 404) {
          setError("No record found");
        } else {
          setForm((state) => {
            return {
              ...state,
              name: res.data.data.name,
              nik: res.data.data.nik,
              work_experience: res.data.data.work_experience,
              dob: res.data.data.dob,
              sex: res.data.data.sex,
              email: res.data.data.email,
              contact: res.data.data.contact,
              avatar: res.data.data.avatar,
            };
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setError(error.response.data.errors[0]);
          console.log(error);
        }
      });
  };

  useEffect(() => {
    fetch(uuid);
  }, [setForm]);
  return (
    <div>
      <Container className="my-4" fluid>
        <Row>
          <Col md="1">
            <SideBarMedStaff />
          </Col>
          <Col md={6} className="m-auto">
            <div className="d-flex justify-content-center mb-3">
              {form.avatar === "" ? (
                <img src={Avatar} style={{ height: "130px" }} />
              ) : (
                <img src={form.avatar} style={{ height: "56px" }} />
              )}
            </div>
            <Form noValidate>
              <div className={style.cardForm}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Name
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="name"
                      value={form.name}
                      disabled
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Date of Birth
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="text"
                      value={form.dob}
                      disabled
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Sex
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="text"
                      value={form.sex}
                      disabled
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Email
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="text"
                      value={form.email}
                      disabled
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Contact
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="text"
                      value={form.contact}
                      disabled
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="3">
                    Work Experience
                  </Form.Label>
                  <Col md="9">
                    <Form.Control
                      type="work_experience"
                      value={form.work_experience}
                      required
                      disabled
                    />
                  </Col>
                </Form.Group>
              </div>
            </Form>

            {error && <p className="text-center text-dark mt-5">{error}</p>}
            <div className="d-flex justify-content-center">
              <Link to="/listStaff">
                <Button variant="warning">Back To All Staff</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default ProfileStaff;
