import React from "react";
import styled from "styled-components";
import styles from "../dashboardStaffComponents/DashboardCard.module.css";
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";
import totalPatient from "../../icons/registered.png";
import brain from "../../icons/brain.png";
import heartbeat from "../../icons/heartbeat.png";
import pediatrics from "../../icons/pediatrics.png";
export default function DashboardCard() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      {/* <Wrapper> */}
        <div className={`${styles.title}`}>Welcome Staff, </div>
        <div className={`${styles.cardstyle}`}>
          <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
            <Card.Body>
              <img
                src={totalPatient}
                alt=""
                className={`${styles.iconDashboard}`}
              />
              <Card.Title>Total</Card.Title>
              <Card.Text className={`${styles.cardtext}`}>
                20 Patients
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
            <Card.Body>
              <img src={brain} alt="" className={`${styles.iconDashboard}`} />
              <Card.Title>Neurology</Card.Title>
              <Card.Text className={`${styles.cardtext}`}>
                10 Patients
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
            <Card.Body>
              <img
                src={heartbeat}
                alt=""
                className={`${styles.iconDashboard}`}
              />
              <Card.Title>Cardiology</Card.Title>
              <Card.Text className={`${styles.cardtext}`}>
                10 Patients
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "12rem" }} className={`${styles.kartu}`}>
            <Card.Body>
              <img
                src={pediatrics}
                alt=""
                className={`${styles.iconDashboard}`}
              />
              <Card.Title>Pediatrics</Card.Title>
              <Card.Text className={`${styles.cardtext}`}>
                10 Patients
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      {/* </Wrapper> */}
    </div>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  font-family: "Mulish", sans-serif;
  position: absolute;
  background-color: white;
`;
