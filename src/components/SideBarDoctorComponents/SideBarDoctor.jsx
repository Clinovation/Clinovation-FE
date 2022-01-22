import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Avatar from "../../icons/staffProfile.png";
import Home from "../../icons/home-page.svg";
import MedicalRecord from "../../icons/medical-record.svg";
import Medical from "../../icons/medical.svg";
import style from "../SideBarDoctorComponents/SideBarDoctor.module.css";

function SideBarDoctor() {
  return (
    <div>
      <div>
        <Link to="/dashboardDoctor">
          <img src={Logo} className="logo" style={{ height: "80px" }} />
        </Link>
      </div>

      <div className={style.stickySidebar}>
        <div className={style.navIconContainer}>
          <div className={style.navIconItem}>
            <Link to="/updateProfileDoctor">
              <img src={Avatar} style={{ height: "40px" }} />
            </Link>
            
            <p style={{ fontSize: "10px" }}>Ralph Murphy</p>
          </div>
        
            <Link to="/dashboardDoctor" className="m-auto">
              <img src={Home} style={{ height: "24px" }}  className={style.iconHover}/>
            </Link>
            <Link to="/listPrescription" className="m-auto">
              <img src={MedicalRecord} style={{ height: "24px" }} className={style.iconHover}/>
            </Link>
            <Link to="/listPatienDoctor" className="m-auto">
              <img src={Medical} style={{ height: "24px" }} className={style.iconHover}/>
            </Link>
         
          
        </div>
      </div>
    </div>
  );
}

export default SideBarDoctor;
