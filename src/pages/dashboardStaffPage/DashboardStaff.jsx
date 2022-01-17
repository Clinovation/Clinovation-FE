import React from "react";
import styled from "styled-components";
import DashboardCard from "../../components/dashboardStaffComponents/DashboardCard";
import { Row, Col, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
import LastPatient from "../../components/lastPatientComponent/LastPatient";
import Schedule from "../../components/dashboardScheduleComponents/Schedule";
export default function StaffDashboard() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="2">
            <SideBarMedStaff />
          </Col>
          <Col md="10">
            <Wrapper>
              <DashboardCard />
              {/* <div className={`${styles.title}`}>Schedules</div>
              <div style={{ fontSize: "18px" }}>Today</div> */}
              <Schedule />
              <Row>
                <Col md="1"></Col>
                <Col md="11">
                  <LastPatient />
                </Col>
              </Row>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  font-family: "Mulish", sans-serif;
  position: absolute;
  background-color: white;
`;
