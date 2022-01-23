import React from "react";
import { Button, Card } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../viewProfilePictureStaffComponents/ViewProfilePicture.module.css";
import Paginations from "../pagination";
import { API_URL } from "../../utils/const";
export default function ViewProfilePicture() {
  return (
    <div>
      {/* <div className={`${styles.title}`}>Hello Medical Staff,</div> */}
      <br />
      <div className={`${styles.profil}`}>
        <img
          src={staffprofile}
          alt=""
          className={`${styles.profilepicture} ms-5`}
        />
      </div>
    </div>
  );
}
