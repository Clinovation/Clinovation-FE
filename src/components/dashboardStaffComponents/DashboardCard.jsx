import React from "react";
import styles from "../dashboardStaffComponents/DashboardCard.module.css";
import { Card } from "react-bootstrap";
import dentist from "../../icons/dentistry.png";
import fetus from "../../icons/fetus.png";
import otor from "../../icons/otorhinolaryngology.png";
import brain from "../../icons/brain.png";
import heartbeat from "../../icons/heartbeat.png";
import pediatrics from "../../icons/pediatrics.png";
import { API_URL } from "../../utils/const";
export default function DashboardCard() {
  return (
    <div>
      {/* <Wrapper> */}
      <div className={`${styles.title}`}>Welcome Staff, </div>
      <div className={`${styles.cardstyle}`}>
        <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
          <Card.Body>
            <img src={dentist} alt="" className={`${styles.iconDashboard}`} />
            <Card.Title style={{ marginTop: "25px" }}>Dentist</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
          <Card.Body>
            <img src={fetus} alt="" className={`${styles.iconDashboard}`} />
            <Card.Title style={{ marginTop: "25px" }}>Obstetricians</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
          <Card.Body>
            <img src={otor} alt="" className={`${styles.iconDashboard}`} />
            <Card.Title style={{ marginTop: "25px" }}>
              Otorhinolaryngology
            </Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
          <Card.Body>
            <img
              src={pediatrics}
              alt=""
              className={`${styles.iconDashboard}`}
            />
            <Card.Title style={{ marginTop: "25px" }}>Pediatrics</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
