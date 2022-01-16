
import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
import AllDoctorSchedules from "../../components/allScheduleDoctorComponents/AllDoctorSchedules";
import AllNurseAccounts from "../../components/allScheduleNurseComponents/AllNurseSchedule";
export default function AllSchedulesPage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="3">
            <SideBarMedStaff />
          </Col>
          <Col md="9" className="mr-5">
            <Wrapper>
              <AllDoctorSchedules />
              <AllNurseAccounts />
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Wrapper = styled.div`
  font-family: "Mulish", sans-serif;
  position: absolute;
  background-color: white;
`;

