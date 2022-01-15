import React from 'react'
import styled from "styled-components";
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
import ManageAccountTop from "../../components/manageAccountTopComponents/ManageAccountTop";
import AllDoctorAccounts from '../../components/manageAccountAllDoctorsComponents/AllDoctorAccounts';
import AllNurseAccounts from '../../components/manageAccountAllNursesComponents/AllNurseAccounts';
export default function ManageAccount() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="1">
              <SideBarMedStaff />
            </Col>
            <Col md="11">
              <Wrapper>
                <ManageAccountTop />
                <AllDoctorAccounts />
                <AllNurseAccounts />
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
