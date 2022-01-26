import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import { Link } from "react-router-dom";
import styles from "../dashboardScheduleComponents/Schedule.module.css";
import { Card, Button, Pagination } from "react-bootstrap";
import moment from "moment";

import { API_URL } from "../../utils/const";

export default function Schedule() {
  var now = new Date();
  var day = moment(now).format('dddd')
  console.log(day)
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

  const [filter, setFilter] = useState("")
  const [error, setError] = useState();
  const [errorNurse, setErrorNurse] = useState();

  const fetchDoctor = (page, day) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .get(`${API_URL}/doctor/queryDay?day=${day}&page=${page}`, GenerateAxiosConfig())

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

   const fetchNurse = (page, day) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
      axios
        .get(`${API_URL}/nurse/queryDay?day=${day}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setNurse({
              data: [],
              currPage: 1,
              pages: [],
					  });
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
    fetchDoctor(1, day);
    fetchNurse(1, day)
  }, [setDoctor, setNurse]);

  const handlePage = (index) => {
    fetch(index, filter);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  console.log(doctor)
  console.log("data nurse: ",nurse)
  // doctor.data=doctor.data.filter(doctor.data => doctor.data.work_day == day)
  return (
    <div>
      <br /> <br /> <br />
      <div className={`${styles.title}`}>Schedules</div>
      <div style={{ fontSize: "18px" }}>Today</div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>{moment(now).format('LL') }</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Doctor Schedules</div>
                  {error && <p className="text-center text-dark mt-5">{error}</p>}

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
                      <img
                        src={item.avatar}
                        style={{ height: "56px" }}
                      />
                    )}
                    <span className={`${styles.infoJadwal}`}>dr.{item.name.slice(0,5)}</span>
                    <span className={`${styles.infoJadwal}`}>{item.specialist}</span>
                    <span className={`${styles.infoJadwal}`}>{item.work_hour}</span>
                  </Card.Body>
                 
                </Card>
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

                <Card.Text className={`${styles.cardtext}`}>
                  {" "}
                  <br />
                  

                  <div style={{ display: "flex" }}>
                    <Link to="/allSchedules" className="m-auto">
                      <Button
                        variant="info"
                        className={`${styles.showmore}`}
                      >
                        <div style={{color:"white"}}>
                          Show more
                        </div>
                      </Button>
                    </Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
          
        </Card>

        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>{moment(now).format('LL')}</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Nurse Schedules</div>
                {errorNurse && <p className="text-center text-dark mt-5">{errorNurse}</p>}

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
                      <img
                        src={item.avatar}
                        style={{ height: "56px" }}
                      />
                    )}
                    <span className={`${styles.infoJadwal}`}>dr.{item.name.slice(0,5)}</span>
                    <span className={`${styles.infoJadwal}`}>{item.work_hour}</span>
                  </Card.Body>
                </Card>
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
                <Card.Text className={`${styles.cardtext}`}>
                  {" "}
                  <br />
                  <div style={{ display: "flex" }}>
                    <Link to="/allSchedules" className="m-auto">
                      <Button
                        variant="info"
                        className={`${styles.showmore}`}
                      >
                        <div style={{color:"white"}}>
                          Show more
                        </div>
                      </Button>
                    </Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
