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
import Avatar from "../../icons/nurse-icon.png";
import SideBarMedStaff from "../SideBarMedStaffComponents/SideBarMedStaff";
import style from '../CardListPatientDoctorComponents/CardList.module.css'
import { API_URL } from "../../utils/const";
function CardListNurse() {
  const [nurse, setNurse] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const fetch = (page, name) => {
      axios
        .get(`${API_URL}/nurse/queryName?name=${name}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setNurse({
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
            setNurse((state) => {
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
  }, [setNurse]);

  const handlePage = (index) => {
    fetch(index, filter);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  console.log(nurse)
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
                    <h3>Nurse Lists</h3>
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

              {nurse?.data?.map((item) => (
                <Row>
                  <div className="d-flex justify-content-center mt-2">
                    <Card style={{ marginBottom: "10px", width: "900px" }} className={style.CardHover}>
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
                            <Link to={`/profileNurse/${item.uuid}`}>
                              <Button

                                variant="info"

                                size="sm"
                                style={{ marginRight: "30px" }}
                              >
                                <div style={{ color: "#ffffff" }}>
                                  View Nurse
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
                {nurse && (
                  <Pagination className="align-self-center">
                    {nurse.pages.map((item) => (
                      <Pagination.Item
                        key={item}
                        active={item === nurse.currPage}
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

export default CardListNurse;
