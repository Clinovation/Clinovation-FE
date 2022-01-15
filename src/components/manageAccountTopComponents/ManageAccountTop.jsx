import React from 'react'
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";

import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import { FaSearch, FaIdCard } from "react-icons/fa";
import manicon from "../../icons/man.png";
import { FcClock } from "react-icons/fc";
import ward from "../../icons/bed.png";
import { GiStethoscope } from "react-icons/gi";
import styles from "../manageAccountTopComponents/ManageAccountTop.module.css"
export default function ManageAccountTop() {
  return (
    <div>
      <div className={`${styles.title}`}>Manage Account </div>
      <br />
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>New Doctor Account</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <Card>
                  <Card.Body>
                    <img
                      src={staffprofile}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal2}`}>dr. Morty</span>
                    <span className={`${styles.infoJadwal2}`}>Neurology</span>
                    <span style={{ marginLeft: "20px" }}>
                      <Button variant="outline-success">Confirm</Button>{" "}
                      <Button variant="outline-danger">Reject</Button>{" "}
                    </span>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <img
                      src={staffprofile}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span className={`${styles.infoJadwal2}`}>dr. Morty</span>
                    <span className={`${styles.infoJadwal2}`}>Neurology</span>
                    <span style={{ marginLeft: "20px" }}>
                      <Button variant="outline-success">Confirm</Button>{" "}
                      <Button variant="outline-danger">Reject</Button>{" "}
                    </span>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Card className={`${styles.kartu2}`}>
          <div className={`${styles.DateSchedule}`}>New Nurse Account</div>
          <Card.Body>
            <Card>
              <Card.Body>
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    {/* penggunaan flex */}
                    {/* <div class="d-flex">
                        <div class="mr-auto p-2"> <img
                        src={nurseicon}
                        alt=""
                        className={`${styles.iconDashboard2}`}
                      /></div>
                      <div class="mr-auto p-2"><span className={`${styles.infoJadwal
                      }`}>Nurse Monty</span></div>
                        <div class="p-2"><Button variant="outline-success">Confirm</Button>{' '}</div>
                        <div class="p-2"><Button variant="outline-danger">Reject</Button>{' '}</div>
                      </div> */}
                    <span
                      className={`${styles.infoJadwal}`}
                      style={{ width: "10px" }}
                    >
                      Nurse Monty
                    </span>
                    <span style={{ marginLeft: "20px" }}>
                      <Button variant="outline-success">Confirm</Button>{" "}
                      <Button variant="outline-danger">Reject</Button>{" "}
                    </span>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <img
                      src={nurseicon}
                      alt=""
                      className={`${styles.iconDashboard2}`}
                    />
                    <span
                      className={`${styles.infoJadwal}`}
                      style={{ width: "58px" }}
                    >
                      Nurse Alex
                    </span>
                    <span style={{ marginLeft: "20px" }}>
                      <Button variant="outline-success">Confirm</Button>{" "}
                      <Button variant="outline-danger">Reject</Button>{" "}
                    </span>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <hr style={{ width: "70vw" }} />
      <br />
    </div>
  );
}
