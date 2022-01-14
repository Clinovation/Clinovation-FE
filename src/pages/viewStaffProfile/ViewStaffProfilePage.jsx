import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import SideBarMedStaff from "../../components/SideBarMedStaffComponents/SideBarMedStaff";
import ViewProfileForm from "../../components/viewStaffProfileFormComponents/ViewProfileForm";
import ViewProfilePicture from "../../components/viewProfilePictureStaffComponents/ViewProfilePicture";
export default function ViewStaffProfilePage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="3">
            <SideBarMedStaff />
          </Col>
          <Col md="9">
            <Wrapper>
              <Row>
                <Col md="2" mt-5></Col>
                <Col md="10" mt>
                  <ViewProfilePicture />
                </Col>
              </Row>
              <ViewProfileForm />
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
