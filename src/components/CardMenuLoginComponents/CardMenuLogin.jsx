import React from "react";
import { Modal, Card, Button } from "react-bootstrap";
import HealthCare from "../../icons/healthCare.png";
import Doctor from "../../icons/doctor.png";
import Nurse from "../../icons/nurse.png";
import Logo from "../../images/Logo.png";
import style from "../CardMenuLoginComponents/CardMenuLogin.module.css";
import FormLoginDoctor from "../FormLoginComponents/FormLoginDoctor";
import FormLoginNurse from "../FormLoginComponents/FormLoginNurse";
import FormLoginMedicalStaff from "../FormLoginComponents/FormLoginMedicalStaff";

function ModalLoginDoctor(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            <img src={Doctor} style={{ height: "35px", marginRight: "10px" }} />
            Doctor Login
          </h4>
        </div>
        <FormLoginDoctor />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalLoginNurse(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            <img src={Nurse} style={{ height: "35px", marginRight: "10px" }} />
            Nurse Login
          </h4>
        </div>
        <FormLoginNurse />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalLoginMedicalStaff(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            <img
              src={HealthCare}
              style={{ height: "35px", marginRight: "10px" }}
            />
            Medical Staff Login
          </h4>
        </div>
        <FormLoginMedicalStaff />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CardMenuLogin() {
  const [modalShowDoctor, setModalShowDoctor] = React.useState(false);
  const [modalShowNurse, setModalShowNurse] = React.useState(false);
  const [modalShowMedicalStaff, setModalShowMedicalStaff] =
    React.useState(false);

  return (
    <div className={style.container} style={{ width: "340px" }}>
      <ModalLoginDoctor
        show={modalShowDoctor}
        onHide={() => setModalShowDoctor(false)}
      />
      <ModalLoginNurse
        show={modalShowNurse}
        onHide={() => setModalShowNurse(false)}
      />
      <ModalLoginMedicalStaff
        show={modalShowMedicalStaff}
        onHide={() => setModalShowMedicalStaff(false)}
      />
      <div className="d-flex bd-highlight">
        <div className="p-2 bd-highlight">
          <Card
            style={{ width: "160px", textAlign: "center" }}
            onClick={() => setModalShowDoctor(true)}
          >
            <div>
              <Card.Img variant="top" src={Doctor} style={{ width: "100px" }} />
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "Bold" }}>Doctor</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="ms-auto p-2 bd-highlight">
          <Card
            style={{ width: "160px", textAlign: "center" }}
            onClick={() => setModalShowMedicalStaff(true)}
          >
            <div>
              <Card.Img
                variant="top"
                src={HealthCare}
                style={{ width: "100px" }}
              />
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "Bold" }}>
                Medical staff
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          style={{ width: "160px", textAlign: "center" }}
          onClick={() => setModalShowNurse(true)}
        >
          <div>
            <Card.Img variant="top" src={Nurse} style={{ width: "100px" }} />
          </div>
          <Card.Body>
            <Card.Title style={{ fontWeight: "Bold" }}>Nurse</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
