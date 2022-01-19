import React from "react";
import styled from "styled-components";
import InputMedicine from "../../components/inputMedicineComponents/InputMedicine";
import { Row, Col, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
export default function InputMedicinePage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="1">
            <SideBarMedStaff />
          </Col>
          <Col md="11">
            <Wrapper>
              <h3>Medicine Lists</h3><br/>
              <InputMedicine />
              {/* <div className={`${styles.title}`}>Schedules</div>
              <div style={{ fontSize: "18px" }}>Today</div> */}
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

  background-color: white;
`;
