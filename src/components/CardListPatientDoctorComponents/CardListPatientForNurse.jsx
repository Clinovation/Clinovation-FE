import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  InputGroup,
  FormControl,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../icons/man.png";
import SidebarNurse from "../SideBarNurseComponents/SideBarNurse";
import style from '../CardListPatientDoctorComponents/CardList.module.css'
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import axios from "axios";

export default function CardListPatientForNurse() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;

  const [modalShow, setModalShow] = useState(false);

  const [patient, setPatient] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const fetch = (page, name) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    // if (patient.by === "") {
      axios
        .get(`${API_URL}/patient/queryName?name=${name}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setPatient({
              data: [],
              currPage: 1,
              pages: [],
					  });
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
    fetch(index, filter);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="1">
            <SidebarNurse />
          </Col>

          <Col md="11">
            
            <Container className="mt-3" style={{ width: "900px" }}>
              <Row>
                <div class="d-flex bd-highlight">
                  <div class="p-2 bd-highlight">
                    <h3>Patient Lists</h3>
                  </div>

                  <div class="ms-auto p-2 bd-highlight">
                    <InputGroup
                      className="mb-3"
                      size="sm"
                      style={{ width: "300px" }}
                    >
                      <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        Search
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </Row>

              <Row>
                <div className="d-flex justify-content-center mt-5">
                  <Card style={{ marginBottom: "10px", width: "900px" }}>
                    <Card.Body style={{ overflowX: "auto" }}>
                      <div class="d-flex bd-highlight">
                        <div class="p-2 bd-highlight">
                          <img
                            src={Avatar}
                            style={{ height: "56px", marginRight: "10px" }}
                          />
                        </div>
                        <div className="p-2 bd-highlight mt-3">
                          <h6 style={{ marginRight: "65px" }}>John</h6>
                        </div>
                        <div className="p-2 bd-highlight mt-3">
                          <h6 style={{ marginRight: "65px" }}>32 Years old</h6>
                        </div>
                        <div className="p-2 bd-highlight mt-3">
                          <h6>710481048018</h6>
                        </div>
                        <div className="ms-auto p-2 bd-highlight mt-3">
                          <Link to="/medicalRecordConsulNurse">
                            <Button
                              variant="warning"
                              size="sm"
                              style={{ marginRight: "30px" }}
                            >
                              <div style={{ color: "#ffffff" }}>
                                Patient Record
                              </div>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
