import React from 'react';
import { Button, Card  } from 'react-bootstrap';
import Date from '../scheduleDate';
import staffprofile from "../../icons/staffProfile.png";
import styles from "../staffProfileComponents/StaffProfile.module.css"
import Paginations from '../pagination';
export default function AllDoctorSchedules() {
    return (
      <div>
        ini profil staff
        <div className={`${styles.title}`}>Hello Medical Staff,</div>
        <br />
        <img src={staffprofile} alt="" className={`${styles.profilepicture}`} />
        <Button variant="info">Change Picture</Button>{" "}
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
