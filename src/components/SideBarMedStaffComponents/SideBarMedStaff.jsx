import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Avatar from "../../icons/staffProfile.png";
import Home from "../../icons/home-page.svg";
import MedicalRecord from "../../icons/medical-record.svg";
import Calendar from "../../icons/calendar.svg";
import User from "../../icons/user.svg";
import style from "../SideBarMedStaffComponents/SideBarMedStaff.module.css";

function SideBarMedStaff() {
  return (
    <div>
      <div>
        <Link to="/dashboardStaff">
          <img src={Logo} className="logo" style={{ height: "80px" }} />
        </Link>
      </div>

      <div>
        <div className={style.navIconContainer}>
          <div className={style.navIconItem}>
            <Link to="/profileStaff" style={{ textDecoration: "none" , color:"black"}}>
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
          <Link to="/listPatient" className="m-auto">
            <img src={MedicalRecord} style={{ height: "24px" }} />
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
