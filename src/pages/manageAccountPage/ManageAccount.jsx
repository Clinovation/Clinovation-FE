import React from 'react'
import styled from "styled-components";
import DashboardCard from "../../components/dashboardStaffComponents/DashboardCard";
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../manageAccountPage/ManageAccount.module.css";
import ManageAccountTop from "../../components/manageAccountTopComponents/ManageAccountTop";
import AllDoctorAccounts from '../../components/manageAccountAllDoctorsComponents/AllDoctorAccounts';
import AllNurseAccounts from '../../components/manageAccountAllNursesComponents/AllNurseAccounts';
export default function ManageAccount() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="2">
              <Sidebar />
            </Col>
            <Col md="10">
              <Wrapper>
                <ManageAccountTop />
                <AllDoctorAccounts/>
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
