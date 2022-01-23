import React from "react";
// import styled from "styled-components";
import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import { Link } from "react-router-dom";
import styles from "../dashboardScheduleComponents/Schedule.module.css";
import { Card, Button } from "react-bootstrap";
import { API_URL } from "../../utils/const";
export default function Schedule() {
  return (
    <div>
      <br /> <br /> <br />
      <div className={`${styles.title}`}>Schedules</div>
      <div style={{ fontSize: "18px" }}>Today</div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>2 December 2021</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Doctor Schedules</div>
                <Card>
                  <Card.Body>
                    <img
                      src={staffprofile}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>dr. Morty</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
                    <span className={`${styles.infoJadwal}`}>12 AM</span>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <img
                      src={staffprofile}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>dr. Morty</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
                    <span className={`${styles.infoJadwal}`}>13 AM</span>
                  </Card.Body>
                </Card>

                <Card.Text className={`${styles.cardtext}`}>
                  {" "}
                  <br />
                  <div style={{ display: "flex" }}>
                    <Link to="/manageAccount" className="m-auto">
                      <Button
                        variant="primary"
                        className={`${styles.showmore}`}
                      >
                        Show more
                      </Button>
                    </Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>2 December 2021</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <div style={{ marginBottom: "10px" }}>Nurse Schedules</div>
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>Nurse Monty</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
                    <span className={`${styles.infoJadwal}`}>12 AM</span>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>Nurse Alex</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
                    <span className={`${styles.infoJadwal}`}>13 AM</span>
                  </Card.Body>
                </Card>
                <Card.Text className={`${styles.cardtext}`}>
                  {" "}
                  <br />
                  <div style={{ display: "flex" }}>
                    <Link to="/manageAccount" className="m-auto">
                      <Button
                        variant="primary"
                        className={`${styles.showmore}`}
                      >
                        Show more
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
