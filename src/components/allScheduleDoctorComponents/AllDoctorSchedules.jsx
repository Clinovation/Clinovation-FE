import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col,Pagination } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../allScheduleDoctorComponents/AllDoctorSchedule.module.css";

import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import { useSelector } from "react-redux";


import { API_URL } from "../../utils/const";

export default function AllDoctorSchedules() {
  const [doctor, setDoctor] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });

  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const day = useSelector((state) => state.day.day.day)
  console.log(day)
  const fetch = (page, day) => {
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
  useEffect(() => {
    fetch(1, day);
  }, [setDoctor, day, setError]);

  const handlePage = (index) => {
    fetch(index, filter);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  return (
    <div>
      <div className={`${styles.title}`}>Schedules</div>
      <br />
      <div className={`${styles.title2}`}>All Doctor Schedules</div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>December 2021</div>
          <br />
          <Date />
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Doctor Schedules</div>
                {error && <p className="text-center text-dark mt-5">{error}</p>}

                {doctor?.data?.map((item) => (
                <Card>
                  <Card.Body>
                    <img
                      src={staffprofile}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>dr. {item.name.slice(0,5)}</span>
                    <span className={`${styles.infoJadwal}`}>{item.specialist}</span>
                    <span className={`${styles.infoJadwal}`}>12 AM</span>
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
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
