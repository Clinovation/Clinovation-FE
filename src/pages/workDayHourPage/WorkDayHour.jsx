import React from "react";
import styled from "styled-components";
import ListWorkDayHour from "../../components/inputWorkDayHourComponents/ListWorkDayHour";
import { Row, Col, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
export default function WorkDayHour() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="1">
            <SideBarMedStaff />
          </Col>
          <Col md="11">
            <Wrapper>
              {/* <h3>Work Day and Hour Lists</h3> */}
              <br />
              <ListWorkDayHour />
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
