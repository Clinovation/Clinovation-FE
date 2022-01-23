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
import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import { FaSearch, FaIdCard } from "react-icons/fa";
import manicon from "../../icons/man.png";
import { FcClock } from "react-icons/fc";
import ward from "../../icons/bed.png";
import { GiStethoscope } from "react-icons/gi";
import styles from "../manageAccountTopComponents/ManageAccountTop.module.css";
export default function ManageAccountTop() {
  const [doctor, setDoctor] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });
  const [nurse, setNurse] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });
  const [errorDoctor, setErrorDoctor] = useState();
  const [errorNurse, setErrorNurse] = useState();

  const fetchDoctor = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/doctor/waitingList?page=${page}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorDoctor("No record found");
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
          setErrorDoctor(error.response.data.meta.messages[0]);
          console.log(error);
        }
      });
  };

  const fetchNurse = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/nurse/waitingList?page=${page}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorNurse("No record found");
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
          setErrorNurse(error.response.data.meta.messages[0]);
          console.log(error);
        }
      });
  };

  useEffect(() => {
    fetchDoctor(1, "");
    fetchNurse(1, "");
  }, [setDoctor, setNurse]);

  const handlePageDoctor = (index) => {
    fetchDoctor(index, "");
  };

  const handlePageNurse = (index) => {
    fetchNurse(index, "");
  };

  const onClickRejectDoctor = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/doctor/${item.uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorDoctor("No record found");
        } else if (res.status === 403) {
          setErrorDoctor("Forbiden");
        } else if (res.status === 500) {
          setErrorDoctor("Internal Server Error");
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorDoctor(error.response.data.errors[0]);
          console.log(error);
        }
      });
  };

  const onClickRejectNurse = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/nurse/${item.uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorNurse("No record found");
        } else if (res.status === 403) {
          setErrorNurse("Forbiden");
        } else if (res.status === 500) {
          setErrorNurse("Internal Server Error");
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorNurse(error.response.data.errors[0]);
          console.log(error);
        }
      });
  };

  const onClickAcceptNurse = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .put(`${API_URL}/nurse/accept/${item.uuid}`, {}, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorNurse("No record found");
        } else if (res.status === 403) {
          setErrorNurse("Forbiden");
        } else if (res.status === 500) {
          setErrorNurse("Internal Server Error");
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorNurse(error.response.data.errors[0]);
          console.log(error);
        }
      });
    window.location.reload();
  };

  const onClickAcceptDoctor = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .put(`${API_URL}/doctor/accept/${item.uuid}`, {}, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setErrorDoctor("No record found");
        } else if (res.status === 403) {
          setErrorDoctor("Forbiden");
        } else if (res.status === 500) {
          setErrorDoctor("Internal Server Error");
        }
      })
      .catch((error) => {
        if (error.response) {
          HandleUnauthorized(error.response);
          setErrorDoctor(error.response.data.errors[0]);
          console.log(error);
        }
      });

    window.location.reload();
  };

  return (
    <div>
      <div className={`${styles.title}`}>Manage Account </div>
      <br />
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>New Doctor Account</div>
          <Card.Body>
            <Card>
              <Card.Body>
                {errorDoctor && (
                  <p className="text-center text-dark mt-5">{errorDoctor}</p>
                )}
                {doctor?.data?.map((item) => (
                  <Card>
                    <Card.Body>
                      {item.avatar === "" ? (
                        <img
                          src={staffprofile}
                          alt=""
                          className={`${styles.iconDashboard2}`}
                        />
                      ) : (
                        <img src={item.avatar} style={{ height: "65px" }} />
                      )}
                      <span className={`${styles.infoJadwal2}`}>
                        dr.{item.name.slice(0,5)}
                      </span>
                      <span className={`${styles.infoJadwal2}`}>
                        {item.specialist}
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <Button
                          variant="outline-success"
                          onClick={() => onClickAcceptDoctor(item)}
                        >
                          Confirm
                        </Button>{" "}
                        <Button
                          variant="outline-danger"
                          onClick={() => onClickRejectDoctor(item)}
                        >
                          Reject
                        </Button>{" "}
                      </span>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-center mt-2">
              {doctor && (
                <Pagination className="align-self-center">
                  {doctor.pages.map((item) => (
                    <Pagination.Item
                      key={item}
                      active={item === doctor.currPage}
                      onClick={() => handlePageDoctor(item)}
                    >
                      {item}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </div>
          </Card.Body>
        </Card>

        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>New Nurse Account</div>
          <Card.Body>
            <Card>
              <Card.Body>
                {errorNurse && (
                  <p className="text-center text-dark mt-5">{errorNurse}</p>
                )}
                {nurse?.data?.map((item) => (
                  <Card>
                    <Card.Body>
                      {item.avatar === "" ? (
                        <img
                          src={nurseicon}
                          alt=""
                          className={`${styles.iconDashboard2}`}
                        />
                      ) : (
                        <img src={item.avatar} style={{ height: "65px" }} />
                      )}

                      {/* penggunaan flex */}
                      {/* <div class="d-flex">
                        <div class="mr-auto p-2"> <img
                        src={nurseicon}
                        alt=""
                        className={`${styles.iconDashboard2}`}
                      /></div>
                      <div class="mr-auto p-2"><span className={`${styles.infoJadwal
                      }`}>Nurse Monty</span></div>
                        <div class="p-2"><Button variant="outline-success">Confirm</Button>{' '}</div>
                        <div class="p-2"><Button variant="outline-danger">Reject</Button>{' '}</div>
                      </div> */}
                      <span
                        className={`${styles.infoJadwal}`}
                        style={{ width: "10px" }}
                      >
                        Nurse {item.name.slice(0,5)}
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <Button
                          variant="outline-success"
                          onClick={() => onClickAcceptNurse(item)}
                        >
                          Confirm
                        </Button>{" "}
                        <Button
                          variant="outline-danger"
                          onClick={() => onClickRejectNurse(item)}
                        >
                          Reject
                        </Button>{" "}
                      </span>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-center mt-2">
              {nurse && (
                <Pagination className="align-self-center">
                  {nurse.pages.map((item) => (
                    <Pagination.Item
                      key={item}
                      active={item === nurse.currPage}
                      onClick={() => handlePageNurse(item)}
                    >
                      {item}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <hr style={{ width: "70vw" }} />
      <br />
    </div>
  );
}
