import React from "react";
import styled from "styled-components";
import DashboardCard from "../../components/dashboardStaffComponents/DashboardCard";
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../dashboardStaffPage/DashboardStaff.module.css";
import LastPatient from "../../components/lastPatientComponent/LastPatient";
import Schedule from "../../components/dashboardScheduleComponents/Schedule";
export default function StaffDashboard() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="2">
            <Sidebar />
          </Col>
          <Col md="10">
            <Wrapper>
              <DashboardCard />
              {/* <div className={`${styles.title}`}>Schedules</div>
              <div style={{ fontSize: "18px" }}>Today</div> */}
              <Schedule />
              <LastPatient />
            </Wrapper>
          </Col>
        </Row>
      </Container>
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
