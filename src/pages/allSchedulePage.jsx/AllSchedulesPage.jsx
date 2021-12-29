import React from 'react'
import styled from "styled-components";
import { Col, Row, Container } from 'react-bootstrap';
import Sidebar from '../../components/sidebar/sidebar';
import AllDoctorSchedules from '../../components/allScheduleDoctorComponents/AllDoctorSchedules'
import AllNurseAccounts from '../../components/allScheduleNurseComponents/AllNurseSchedule';
export default function AllSchedulesPage() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="2">
              <Sidebar />
            </Col>
            <Col md="10">
              <Wrapper>
                <AllDoctorSchedules />
                <AllNurseAccounts/>
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