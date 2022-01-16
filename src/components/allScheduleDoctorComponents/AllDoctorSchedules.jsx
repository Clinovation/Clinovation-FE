import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../allScheduleDoctorComponents/AllDoctorSchedule.module.css";
import Paginations from "../pagination";
export default function AllDoctorSchedules() {
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
                  <div>

                    {/* <Col md="5"></Col>
                    <Col md="7"> */}
                      <Paginations />
                    {/* </Col> */}

                  </div>
                </Card.Text>
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
