import React from "react";
import { Modal, Card, Button } from "react-bootstrap";
import HealthCare from "../../icons/healthCare.png";
import Doctor from "../../icons/doctor.png";
import Nurse from "../../icons/nurse.png";
import Logo from "../../images/Logo.png";
import style from "../CardMenuLoginComponents/CardMenuLogin.module.css";
import FormLogin from "../FormLoginComponents/FormLogin";

function ModalLogin(props) {
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
              style={{ height: "42px", marginRight: "10px" }}
            />
            Medical Staff Login
          </h4>
        </div>
        <FormLogin />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CardMenuLogin() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowStaff, setModalShowStaff] = React.useState(false);
  return (
    <div className="container">
      <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
      <div className={style.gridContainer}>
        <div>
          <Card
            style={{ width: "160px", textAlign: "center" }}
            onClick={() => setModalShow(true)}
          >
            <div>
              <Card.Img variant="top" src={Doctor} style={{ width: "100px" }} />
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "Bold" }}>Doctor</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "160px", textAlign: "center" }}>
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

        <div className={style.gridItem} style={{ textAlign: "center" }}>
          <Card style={{ textAlign: "center" }}>
            <div>
              <Card.Img variant="top" src={Nurse} style={{ width: "100px" }} />
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "Bold" }}>Nurse</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
