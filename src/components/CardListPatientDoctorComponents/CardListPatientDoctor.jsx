import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import {
  Button,
  Card,
  Container,
  Row,
  InputGroup,
  FormControl,
  Pagination,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../icons/man.png";
import SideBarMedStaff from "../SideBarMedStaffComponents/SideBarMedStaff";
import style from '../CardListPatientDoctorComponents/CardList.module.css'
import { API_URL } from "../../utils/const";
function CardListPatientDoctor() {
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
    // const API_URL = "http://184.72.154.87:8080/api/v1";
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

  console.log(filter)
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="1">
            <SideBarMedStaff />
          </Col>

          <Col md="11">
            <Container className="mt-3 mb-5" style={{ width: "1000px" }}>
              <Row>
                <div class="d-flex bd-highlight">
                  <div class="p-2 bd-highlight">
                    <h3>Patient Lists</h3>

                    <Link to={"/registrasiPatient"}>
                      <Button
                        variant="info"
                        onClick={() => setModalShow(true)}
                        style={{ margin: "10px 0 " }}
                      >
                        <div style={{color:"white"}}>
                          Add New Patient
                        </div>
                        
                      </Button>
                    </Link>

                  </div>

                  <div class="ms-auto p-2 bd-highlight">
                    <InputGroup
                      className="mb-3"
                      size="sm"
                      style={{ width: "300px" }}
                    >
                      <FormControl
                        aria-label="search"
                        aria-describedby="basic-addon2"
                        type="search"
                        name="search"
                        value={filter}
                        onChange={onChange}
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={() => {fetch(1, filter)}}
                      >
                        Search
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </Row>


              {error && <p className="text-center text-dark mt-5">{error}</p>}

              {patient?.data?.map((item) => (
                <Row>
                  <div className="d-flex justify-content-center mt-2">
                    <Card
                      key={item.id}
                      style={{ marginBottom: "10px", width: "1000px" }}
                      className={style.CardHover}
                    >
                      <Card.Body style={{ overflowX: "auto" }}>
                        <div class="d-flex bd-highlight">
                          <div class="p-2 bd-highlight">
                            {item.avatar === "" ? (
                              <img src={Avatar} style={{ height: "56px" }} />
                            ) : (
                              <img
                                src={item.avatar}
                                style={{ height: "56px" }}
                              />
                            )}
                          </div>
                          <div className="p-2 bd-highlight mt-3">
                            <h6 style={{ marginRight: "10px", width: "60px" }}>{item.name.slice(0,5)}</h6>
                          </div>
                          <div className="p-2 bd-highlight mt-3">
                            <h6 style={{ marginRight: "10px" }}>{item.dob}</h6>
                          </div>
                          <div className="p-2 bd-highlight mt-3">
                            <h6>{item.nik}</h6>
                          </div>
                          <div className="ms-auto p-2 bd-highlight mt-3">
                            <Link to={`/medicalRecord/${item.uuid}`}>
                              <Button

                                variant="info"

                                size="sm"
                                style={{ marginRight: "30px" }}
                              >
                                <div style={{ color: "#ffffff" }}>
                                  Patient Record
                                </div>
                              </Button>
                            </Link>
                            <Link to={`/inputConsultation/${item.uuid}`}>

                              <Button variant="info" size="sm">

                                <div style={{ color: "#ffffff" }}>
                                  Add New Consultation
                                </div>
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Row>
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
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardListPatientDoctor;
