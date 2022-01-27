import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Avatar from "../../icons/nurse-icon.png";
import Home from "../../icons/home-page.svg";
import MedicalRecord from "../../icons/medical-record.svg";
import Medical from "../../icons/medical.svg";
import style from "../SideBarNurseComponents/SideBarNurse.module.css";

function SideBarNurse() {
  return (
    <div>
      <div>
        <Link to="/dashboardNurse">
          <img src={Logo} className="logo" style={{ height: "80px" }} />
        </Link>
      </div>

      <div>
        <div className={style.navIconContainer}>
          <div className={style.navIconItem}>
            <Link to="/updateProfileNurse">
              <img src={Avatar} style={{ height: "40px" }} />
            </Link>

            <p style={{ fontSize: "10px" }}>Nurse Alex</p>
          </div>

          <Link to="/dashboardNurse" className="m-auto">
            <img src={Home} style={{ height: "24px" }} />
          </Link>
          <Link to="/nurseListPrescription" className="m-auto">
            <img src={MedicalRecord} style={{ height: "24px" }} />
          </Link>
          {/* <Link to="/listPatientDoctorForNurse" className="m-auto">
            <img src={Medical} style={{ height: "24px" }} />
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SideBarNurse;
