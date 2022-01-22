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
import Avatar from "../../icons/staffProfile.png";
import SideBarMedStaff from "../SideBarMedStaffComponents/SideBarMedStaff";
import style from '../CardListPatientDoctorComponents/CardList.module.css'

function CardListDoctor() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;
  const [doctor, setDoctor] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [error, setError] = useState();

  const fetch = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    if (doctor.by === "") {
      axios
        .get(`${API_URL}/doctor/?page=${page}`, GenerateAxiosConfig())
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
            setDoctor((state) => {
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
    } else if (checkName.test(doctor.by)) {
      axios
        .get(
          `${API_URL}/doctor/?name=${by}&page=${page}`,
          GenerateAxiosConfig()
        )
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
            setDoctor((state) => {
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
    } else {
      axios
        .get(`${API_URL}/doctor/?nik=${by}&page=${page}`, GenerateAxiosConfig())
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
            setDoctor((state) => {
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
    }
  };

  useEffect(() => {
    fetch(1, "");
  }, [setDoctor]);

  const handlePage = (index) => {
    fetch(index, doctor.by);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setDoctor({ ...doctor, by: value });
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="1">
            <SideBarMedStaff />
          </Col>

          <Col md="11">
            <Container className="mt-3 mb-5" style={{ width: "900px" }}>
              <Row>
                <div class="d-flex bd-highlight">
                  <div class="p-2 bd-highlight">
                    <h3>Doctor Lists</h3>
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
                        value={doctor.by}
                        onChange={onChange}
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={handlePage}
                      >
                        Search
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </Row>


              {error && <p className="text-center text-dark mt-5">{error}</p>}

              {doctor?.data?.map((item) => (
                <Row>
                  <div className="d-flex justify-content-center mt-2">
                    <Card
                      key={item.id}
                      style={{ marginBottom: "10px", width: "900px" }}
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
                            <h6 style={{ marginRight: "65px", width: "60px" }}>{item.name.slice(0,5)}</h6>
                          </div>
                          <div className="p-2 bd-highlight mt-3">
                            <h6 style={{ marginRight: "65px" }}>{item.dob}</h6>
                          </div>
                          <div className="p-2 bd-highlight mt-3">
                            <h6>{item.nik}</h6>
                          </div>
                          <div className="ms-auto p-2 bd-highlight mt-3">
                            <Link to={`/profileDoctor/${item.uuid}`}>
                              <Button

                                variant="info"

                                size="sm"
                                style={{ marginRight: "30px" }}
                              >
                                <div style={{ color: "#ffffff" }}>
                                  View Doctor
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
                {doctor && (
                  <Pagination className="align-self-center">
                    {doctor.pages.map((item) => (
                      <Pagination.Item
                        key={item}
                        active={item === doctor.currPage}
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

export default CardListDoctor;
