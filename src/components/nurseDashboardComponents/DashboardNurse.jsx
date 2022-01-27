import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  InputGroup,
  FormControl,
  Col,
  Pagination,
} from "react-bootstrap";
import Avatar from "../../icons/staffProfile.png";
import patientvisit from "../../icons/patientvisit.svg";
import aidkit from "../../icons/firstaidkit.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import style from "../nurseDashboardComponents/DashboardNurse.module.css";
import { API_URL } from "../../utils/const";
export default function DashboardNurse() {
  const [patient, setPatient] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });

  const [filter, setFilter] = useState("");
  const [error, setError] = useState();

  const fetch = (page, name) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    // if (patient.by === "") {
    axios
      .get(
        `${API_URL}/patient/queryName?name=${name}&page=${page}`,
        GenerateAxiosConfig()
      )
      // .get(`${API_URL}/patient?nik=${nik}&?page=${page}`, GenerateAxiosConfig())
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

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <Row className="g-5">
            <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Title>
                    Total Patient Queue{" "}
                    <img src={aidkit} style={{ width: "24px" }} />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Today
                  </Card.Subtitle>
                  <Card.Text>20 Patients</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Body>
                  <Card.Title>
                    Total Patient Visits{" "}
                    <img src={patientvisit} style={{ width: "24px" }} />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Today
                  </Card.Subtitle>
                  <Card.Text>20 Patients</Card.Text>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Card style={{ padding: "30px", width: "750px" }}>
            <Card.Title>Patient</Card.Title>
            {error && <p className="text-center text-dark mt-5">{error}</p>}

            {patient?.data?.map((item) => (
              <Card
                style={{ marginBottom: "10px", width: "900px" }}
                key={item.id}
                className={style.CardHover}
              >
                <Card.Body style={{ overflowX: "auto" }}>
                  <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      {item.avatar === "" ? (
                        <img src={Avatar} style={{ height: "56px" }} />
                      ) : (
                        <img src={item.avatar} style={{ height: "56px" }} />
                      )}
                    </div>
                    <div className="p-2 bd-highlight mt-3">
                      <h6 style={{ marginRight: "65px", width: "60px" }}>
                        {item.name.slice(0, 5)}
                      </h6>
                    </div>
                    <div className="p-2 bd-highlight mt-3">
                      <h6 style={{ marginRight: "65px" }}>{item.dob}</h6>
                    </div>
                    <div className="p-2 bd-highlight mt-3">
                      <h6>{item.nik}</h6>
                    </div>
                    <div className="ms-auto p-2 bd-highlight mt-3">
                      <Link to={`/medicalRecordPatient/${item.uuid}`}>
                        <Button
                          variant="info"
                          size="sm"
                          style={{ marginRight: "30px" }}
                        >
                          <div style={{ color: "#ffffff" }}>Patient Record</div>
                        </Button>
                      </Link>
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
