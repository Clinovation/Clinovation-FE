import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import useValidateForm from "../../hooks/useValidateForm";
import {
  Form,
  Button,
  Row,
  Col,
  Table,
  Container,
  Card,
  Pagination,
} from "react-bootstrap";
import Medstaff from "../../icons/healthCare.png";
import style from "./FormPatient.module.css";
import Logo from "../../images/Logo.png";
import { API_URL } from "../../utils/const";
import moment from "moment";
import { useParams } from "react-router-dom";
import Sidebarmedstaff from "../SideBarMedStaffComponents/SideBarMedStaff";
import { Link } from "react-router-dom";

function FormConsul() {
  const { uuid } = useParams();
  const { validateForm } = useValidateForm();
  var now = new Date();
  var day = moment(now).format("dddd");
  const [form, setForm] = useState({
    consultation: "",
    new_record: "",
  });
  const [doctor, setDoctor] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });

  const [filter, setFilter] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [error, setError] = useState();

  const [uuidDoctor, setUuidDoctor] = useState("");

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onChangeUuid = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUuidDoctor(value);
  };

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const messages = validateForm(name, value);
    setErrorMsg({ ...errorMsg, ...messages });
  };

  const fetch = (page, day) => {
    axios
      .get(
        `${API_URL}/doctor/queryDay?day=${day}&page=${page}`,
        GenerateAxiosConfig()
      )

      .then((res) => {
        if (res.status === 204) {
          setDoctor({
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
  };

  //   const fetchNurse = (page, day) => {
  //       axios
  //         .get(`${API_URL}/doctor/queryDay?day=${day}&page=${page}`, GenerateAxiosConfig())

  //         .then((res) => {
  //           if (res.status === 204) {
  //             setDoctor({
  //               data: [],
  //               currPage: 1,
  //               pages: [],
  // 			});
  //             setError("No record found");
  //           } else {
  //             const page = { ...res.data.page };
  //             const length = page.total_data / page.limit;
  //             const active = page.offset / page.limit + 1;
  //             const items = [];
  //             for (let i = 0; i < length; i++) {
  //               items.push(i + 1);
  //             }
  //             setDoctor((state) => {
  //               return {
  //                 ...state,
  //                 data: res.data.data,
  //                 currPage: active,
  //                 pages: items,
  //               };
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           if (error.response) {
  //             HandleUnauthorized(error.response);
  //             setError(error.response.data.meta.messages[0]);
  //             console.log(error);
  //           }
  //         });
  //   };

  useEffect(() => {
    fetch(1, day);
  }, [setDoctor, setError]);

  const handlePage = (index) => {
    fetch(index, day);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(undefined, undefined, form);
    if (Object.keys(newErrors).length > 0) {
      setErrorMsg(newErrors);
    } else {
      // const API_URL = "http://184.72.154.87:8080/api/v1";
      // http://www.clinovation.site:8080/api/v1/medicalRecord/?patientID=a34e5b37-c5a2-4c58-b594-dcbc749a5cc1&userID=9218306f-11e6-4ed1-b1ad-cd88cf878c98
      axios
        .post(
          `${API_URL}/medicalRecord/?patientID=${uuid}&userID=${uuidDoctor}`,
          {
            ...form,
          },
          GenerateAxiosConfig()
        )
        .then(() => {})
        .catch((error) => {
          setErrorMsg({
            ...errorMsg,
            auth: error.response.data.meta.messages[0],
          });
        });
    }
    setTimeout(() => {
      alert("BERHASIL MENAMBAHKAN ");
    }, 1000);

    window.location.reload();
  };

  console.log(doctor);
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <Link to="/dashboardStaff">
              <img src={Logo} style={{ height: "100px" }} />
            </Link>
          </div>
        </Row>
        <Row>
          <Col md={8} className="m-auto mt-3">
            <Card style={{ backgroundColor: "#F7F7F7" }} className="p-4">
              <h3>
                <img
                  src={Medstaff}
                  style={{ height: "42px", marginRight: "10px" }}
                />
                Patient Register
              </h3>
              <br />
              <Form noValidate className={style.cardForm} onSubmit={onSubmit}>
                <div className="cardForm">
                  <h5>Patient New Medical History</h5>
                  <div
                    style={{ borderTop: "2px solid black", padding: "10px" }}
                  ></div>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="new_record"
                      rows={8}
                      value={form.new_record}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </Form.Group>

                  <h5>Patient Consultation</h5>
                  <div
                    style={{ borderTop: "2px solid black", padding: "10px" }}
                  ></div>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={8}
                      name="consultation"
                      value={form.consultation}
                      onChange={onChange}
                      onBlur={onBlur}
                      required
                    />
                  </Form.Group>
                </div>
                <h5>Doctor Schedule</h5>
                <div
                  style={{ borderTop: "2px solid black", padding: "10px" }}
                ></div>
                <div>
                  <Table responsive="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Specialist</th>
                        <th>Work Hour</th>
                        <th>Choose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {error && (
                        <p className="text-center text-dark mt-5">{error}</p>
                      )}

                      {doctor?.data?.map((item) => (
                        <tr>
                          <td>dr.{item.name.slice(0, 5)}</td>
                          <td>{item.specialist}</td>
                          <td>{item.work_hour}</td>
                          <td>
                            <input
                              class="form-check-input"
                              value={item.uuid}
                              type="radio"
                              name="doctor"
                              onChange={onChangeUuid}
                            ></input>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
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
                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="info">
                    <div style={{ color: "white" }}>Save</div>
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}

export default FormConsul;
