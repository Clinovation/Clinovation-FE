import React, { useEffect, useState } from "react";
import { Button, Card, Pagination } from "react-bootstrap";
import axios from "axios";
import Date from "../ScheduleDateNurse.jsx";
import styles from "../allScheduleDoctorComponents/AllDoctorSchedule.module.css";
import nurseicon from "../../icons/nurse-icon.png";
import { API_URL } from "../../utils/const";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import { useSelector } from "react-redux";

export default function AllNurseSchedule() {
  const [nurse, setNurse] = useState({
    data: [],
    currPage: 1,
    pages: [],
  });

  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const day = useSelector((state) => state.day.day)
  console.log("ini day nurse: ",day)
  const fetch = (page, day) => {
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
    fetch(1, day);
  }, [setNurse, day, setError]);

  const handlePage = (index) => {
    fetch(index, filter);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };
  // console.log(day)
  console.log(nurse)
  return (
    <div>
      <div className={`${styles.title2}`}>All Nurse Schedules</div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>December 2021</div>
          <br />
          <Date />
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Nurse Schedules</div>
                {error && <p className="text-center text-dark mt-5">{error}</p>}

                {nurse?.data?.map((item) => (
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>Nurse {item.name.slice(0,5)}</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
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
