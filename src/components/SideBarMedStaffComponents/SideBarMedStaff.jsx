import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Avatar from "../../icons/staffProfile.png";
import Home from "../../icons/home-page.svg";
import MedicalRecord from "../../icons/medical-record.svg";
import Calendar from "../../icons/calendar.svg";
import User from "../../icons/user.svg";
import style from "../SideBarMedStaffComponents/SideBarMedStaff.module.css";
import { Modal, Button } from "react-bootstrap";
import ModalCardListAll from "../ModalCardListAll/ModalCardListAll";
import { GiMedicines } from "react-icons/gi";
import Medicine from "../../icons/medicine.png";
import Work from "../../icons/working-time.png"
function ModalListAll(props) {
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
        <ModalCardListAll />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SideBarMedStaff() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <ModalListAll show={modalShow} onHide={() => setModalShow(false)} />

      <div>
        <Link to="/dashboardStaff">
          <img src={Logo} className="logo" style={{ height: "80px" }} />
        </Link>
      </div>

      <div className={style.stickySidebar}>
        <div className={style.navIconContainer}>
          <div className={style.navIconItem}>
            <Link
              to="/profileUpdateStaff"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={Avatar} style={{ height: "40px" }} />
              <p style={{ fontSize: "10px" }}>Ralph Murphy</p>
            </Link>
          </div>

          <Link to="/dashboardStaff" className="m-auto">
            <img src={Home} style={{ height: "24px" }} />
          </Link>
          <Link to="/allSchedules" className="m-auto">
            <img src={Calendar} style={{ height: "24px" }} />
          </Link>
          <Link to="/listworkdayhour" className="m-auto">
            <img src={Work} style={{ height: "24px" }} />
          </Link>
          {/* <Link to="/listPatient" className="m-auto"> */}
          <img
            src={MedicalRecord}
            style={{ height: "24px" }}
            onClick={() => setModalShow(true)}
          />
          {/* </Link> */}
          <Link to="/listMedicine" className="m-auto">
            <img src={Medicine} style={{ height: "24px" }} />
          </Link>
          <Link to="/manageAccount" className="m-auto">
            <img src={User} style={{ height: "24px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBarMedStaff;
