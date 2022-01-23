import React from "react";
import { Button, Card } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../allScheduleDoctorComponents/AllDoctorSchedule.module.css";
import Paginations from "../pagination";
import nurseicon from "../../icons/nurse-icon.png";
import { API_URL } from "../../utils/const";
export default function AllNurseSchedule() {
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
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal}`}>Nurse Alex</span>
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
                    <span className={`${styles.infoJadwal}`}>Nurse Monty</span>
                    <span className={`${styles.infoJadwal}`}>Neurology</span>
                    <span className={`${styles.infoJadwal}`}>13 AM</span>
                  </Card.Body>
                </Card>

                <Card.Text className={`${styles.cardtext}`}>
                  {" "}
                  <br />
                  <div>
                    <Paginations />
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
