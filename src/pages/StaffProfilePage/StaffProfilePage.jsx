import React from 'react'
import styled from "styled-components";
import { Col, Row, Container } from 'react-bootstrap';
import Sidebar from '../../components/sidebar/sidebar';
import ProfilePicture from "../../components/staffProfilePictureComponents/ProfilePicture";
import ProfileForm from '../../components/staffProfileFormComponents/ProfileForm';
export default function StaffProfilePage() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="2">
              <Sidebar />
            </Col>
            <Col md="10">
              <Wrapper>
                <ProfilePicture />
                <ProfileForm/>
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