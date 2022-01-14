import React from "react";
import { Button, Card } from "react-bootstrap";
import Date from "../scheduleDate";
import staffprofile from "../../icons/staffProfile.png";
import styles from "../staffProfilePictureComponents/ProfilePicture.module.css";
import Paginations from "../pagination";
export default function ProfilePicture() {
  return (
    <div>
      <div className={`${styles.title}`}>Hello Medical Staff,</div>
      <br />
      <div className={`${styles.profil}`}>
        <img src={staffprofile} alt="" className={`${styles.profilepicture}`} />
        <Button variant="info" style={{ color: "white" }}>
          Change Picture
        </Button>{" "}
      </div>
     
    </div>
  );
}
