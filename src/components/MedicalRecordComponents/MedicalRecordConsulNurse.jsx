import { React, useState } from "react";
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap";
import style from "./MedicalRecord.module.css";
import { Link } from "react-router-dom";
import SidebarNurse from "../SideBarNurseComponents/SideBarNurse";
import NurseFormAddPrescription from "../NurseFormAddPrescriptionComponents/NurseFormAddPrescription";
import { API_URL } from "../../utils/const";
function ModalAddPrescription(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {/* <img
              src={HealthCare}
              style={{ height: "50px", marginRight: "10px" }}
            /> */}
            Add Prescription
          </h4>
        </div>
        <NurseFormAddPrescription />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function MedicalRecordConsulNurse() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <ModalAddPrescription
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Container fluid>
        <Row>
          <Col md="1">
            <SidebarNurse />
          </Col>

          <Col md={6} className="m-auto my-2">
            <h2>Patient Medical Record</h2>
            {/* <Form> */}
            <div className={`${style.cardForm} mt-4`}>
              <h5>Profile</h5>
              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>
              <p>
                <strong>Name :</strong> Paul
              </p>
              <p>
                <strong>NIK :</strong> 33721239123010
              </p>
              <p>
                <strong>Date of Birth :</strong> 01-12-1997
              </p>
              <p>
                <strong>Sex :</strong> Male
              </p>
              <p>
                <strong>Address :</strong> Jl.Pattimura
              </p>
              <p>
                <strong>Martial Status :</strong> Married
              </p>
              <p>
                <strong>Patient Height :</strong> 180 cm
              </p>
              <p>
                <strong>Patient Weight :</strong> 75 kg
              </p>

              <h5>Medical Record</h5>
              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                aliquet vestibulum rhoncus quis pellentesque. Sit ut
                pellentesque accumsan tellus at diam accumsan faucibus.
                Adipiscing tortor, ac turpis sociis. Vitae eget nisi gravida
                luctus dolor, id ornare. Placerat viverra lectus ullamcorper
                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae
                amet ipsum.
              </p>

              <h5>Consultation</h5>
              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                aliquet vestibulum rhoncus quis pellentesque. Sit ut
                pellentesque accumsan tellus at diam accumsan faucibus.
                Adipiscing tortor, ac turpis sociis. Vitae eget nisi gravida
                luctus dolor, id ornare. Placerat viverra lectus ullamcorper
                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae
                amet ipsum.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              {/* <Link to="/addPrescription"> */}
              <Button
                type="submit"
                variant="info"
                onClick={() => setModalShow(true)}
              >
                Add Prescription
              </Button>
              {/* </Link> */}
            </div>

            {/* </Form> */}
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}