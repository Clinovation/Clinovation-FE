import React from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import Avatar from "../../icons/man.png";
import patientvisit from "../../icons/patientvisit.svg";
import aidkit from "../../icons/firstaidkit.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../DashboardDoctorComponents/DashboardDoctor.module.css";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/const";
function CardDashboardDoctor() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;

  const [patient, setPatient] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [error, setError] = useState();

  const fetch = (page, by) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    // if (patient.by === "") {
    axios
      .get(`${API_URL}/medicalRecord/queue?page=${page}`, GenerateAxiosConfig())
      // .get(`${API_URL}/medicalRecord/medicalStaff/queue?page=${page}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else {
          const page = { ...res.data.page };
          const length = page.total_data / page.limit;
          const active = page.offset / page.limit + 1;
          const items = [];
          for (let i = 0; i < length; i++) {
            items.push(i + 1);
          }
          setPatient((state) => {
            return {
              ...state,
              data: res.data.data,
              currPage: active,
              pages: items,
            };
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setError(error.response.data.meta.messages[0]);
          console.log(error);
        }
      });
    // } else if (checkName.test(patient.by)) {
    //   axios
    //     .get(
    //       `${API_URL}/patient/?name=${by}&page=${page}`,
    //       GenerateAxiosConfig()
    //     )
    //     .then((res) => {
    //       if (res.status === 204) {
    //         setError("No record found");
    //       } else {
    //         const page = { ...res.data.page };
    //         const length = page.total_data / page.limit;
    //         const active = page.offset / page.limit + 1;
    //         const items = [];
    //         for (let i = 0; i < length; i++) {
    //           items.push(i + 1);
    //         }
    //         setPatient((state) => {
    //           return {
    //             ...state,
    //             data: res.data.data,
    //             currPage: active,
    //             pages: items,
    //           };
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         HandleUnauthorized(error.response);
    //         setError(error.response.data.meta.messages[0]);
    //         console.log(error);
    //       }
    //     });
    // } else {
    //   axios
    //     .get(
    //       `${API_URL}/patient/?nik=${by}&page=${page}`,
    //       GenerateAxiosConfig()
    //     )
    //     .then((res) => {
    //       if (res.status === 204) {
    //         setError("No record found");
    //       } else {
    //         const page = { ...res.data.page };
    //         const length = page.total_data / page.limit;
    //         const active = page.offset / page.limit + 1;
    //         const items = [];
    //         for (let i = 0; i < length; i++) {
    //           items.push(i + 1);
    //         }
    //         setPatient((state) => {
    //           return {
    //             ...state,
    //             data: res.data.data,
    //             currPage: active,
    //             pages: items,
    //           };
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         HandleUnauthorized(error.response);
    //         setError(error.response.data.meta.messages[0]);
    //         console.log(error);
    //       }
    //     });
    // }
  };

  useEffect(() => {
    fetch(1, "");
  }, [setPatient]);

  const handlePage = (index) => {
    fetch(index, "");
  };
  // const onChange = (e) => {
  //   const value = e.target.value;
  //   setPatient({ ...patient, by: value });
  // };

  const onClickDone = (item) => {
    // const API_URL = process.env.BE_API_URL;
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .delete(`${API_URL}/medicalRecord/${item.uuid}`, GenerateAxiosConfig())
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
  };

  console.log(error);
  console.log(patient);
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <Row className="g-5">
            <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Body style={{ marginLeft: "25px" }}>
                  <Card.Title>
                    Total Patient Queue{" "}
                    <img src={aidkit} style={{ width: "24px" }} />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Today
                  </Card.Subtitle>
                  {patient && (
                    <Card.Text>{patient.data.length} Patients</Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>

            {/* <Col>
                      <Card style={{ width: '26.5rem' }}>
                          <Card.Body style={{ marginLeft: '25px' }}>
                              <Card.Title>Total Patient Visits <img src={patientvisit} style={{ width: '24px' }}/></Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                              <Card.Text>
                              20 Patients
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col> */}
          </Row>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Card style={{ padding: "30px", width: "900px" }}>
            <Card.Title>Patient</Card.Title>
            {error && <p className="text-center text-dark mt-5">{error}</p>}
            {patient?.data?.map((item) => (
              <Card
                style={{ marginBottom: "10px" }}
                key={item.id}
                className={style.CardHover}
              >
                <Card.Body className={style.responsiveCard}>
                  <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      {item.avatar === "" ? (
                        <img src={Avatar} style={{ height: "56px" }} />
                      ) : (
                        <img src={item.avatar} style={{ height: "56px" }} />
                      )}
                    </div>
                    <div
                      class="p-2 bd-highlight mt-2"
                      style={{ width: "100px" }}
                    >
                      {/* var nama = {item.name} */}
                      {item.patient_name.slice(0, 5)}
                    </div>
                    <div
                      class="p-2 bd-highlight mt-2"
                      style={{ marginRight: "30px" }}
                    >
                      {item.patient_dob}
                    </div>
                    <div class="p-2 bd-highlight mt-2">{item.patient_nik}</div>
                    <div class="ms-auto p-2 bd-highlight mt-2">
                      <Link to={`/medicalRecordConsultation/${item.uuid}`}>
                        <Button variant="info" size="sm">
                          <div style={{ color: "white" }}>Patient Record</div>
                        </Button>
                      </Link>
                    </div>
                    <div class="ms-auto p-2 bd-highlight mt-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => onClickDone(item)}
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
            <div className="d-flex justify-content-center">
              {patient && (
                <Pagination className="align-self-center">
                  {patient.pages.map((item) => (
                    <Pagination.Item
                      key={item}
                      active={item === patient.currPage}
                      onClick={() => handlePage(item)}
                    >
                      {item}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default CardDashboardDoctor;
