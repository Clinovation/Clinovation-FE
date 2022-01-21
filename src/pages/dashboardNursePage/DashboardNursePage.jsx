import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import nurseIcon from "../../icons/nurse-icon.png";
import Sidebar from "../../components/SideBarNurseComponents/SideBarNurse";
import CardDashboardDoctor from "../../components/DashboardDoctorComponents/DashboardDoctor";
import { Link } from "react-router-dom";

import DashboardNurse from "../../components/nurseDashboardComponents/DashboardNurse";
export default function DashboardNursePage() {
  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col md="1">
              <Sidebar />
            </Col>

            <Col md="11" className="mr-5">
              <Container className="m-0 p-0"><br/>
                {/* <div className="d-flex justify-content-end mt-2">
                  <div className="d-flex flex-row">
                    <Link to="/updateProfileDoctor">
                      <img src={nurseIcon} style={{ height: "36px" }} />
                    </Link>

                    <h6 className="p-2">Nurse Alex</h6>
                  </div>
                </div> */}
                <div className="mt-4">
                  <DashboardNurse />
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
