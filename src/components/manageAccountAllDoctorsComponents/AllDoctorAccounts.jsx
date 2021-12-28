import React from 'react'
import styles from "../manageAccountAllDoctorsComponents/AllDoctorAccounts.module.css"
import { Card, Button, Row, Col, Pagination, Container } from "react-bootstrap";
import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import ward from "../../icons/bed.png";
import { FaSearch, FaIdCard } from "react-icons/fa";
import Paginations from "../pagination"
export default function AllDoctorAccounts() {
     
    return (
      <div>
        <div className={`${styles.title2} d-flex`}>
          <div className={`${styles.title} mr-auto p-2`}>
            All Doctor Accounts
          </div>

          <div class="col-md-5 p-2">
            <div class="input-group">
              <input
                class="form-control border-end-0 border"
                type="search"
                placeholder="search"
                id="example-search-input"
              />
              <span class="input-group-append">
                <button
                  class="btn btn-outline-secondary bg-white border ms-n5"
                  type="button"
                >
                  <FaSearch style={{ width: "15px", height: "15px" }} />
                </button>
              </span>
            </div>
          </div>
        </div>

        <Row>
          <Col md="7">
            <Card className={`${styles.kartu3}`}>
              <Card.Body>
                <img
                  src={staffprofile}
                  alt=""
                  className={`${styles.iconDashboard2}`}
                />
                <span className={`${styles.infoJadwal}`}>dr. Morty</span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <FaIdCard className={`${styles.iconDashboard3}`} />
                  <span className={`${styles.infoJadwal}`}>190148901702</span>
                </span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <img
                    src={ward}
                    alt=""
                    className={`${styles.iconDashboard}`}
                  />
                  <span className={`${styles.infoJadwal}`}>Neurology</span>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Button variant="btn btn-danger" style={{ marginTop: "50px" }}>
              Delete
            </Button>{" "}
          </Col>
        </Row>

        <Row>
          <Col md="7">
            <Card className={`${styles.kartu3}`}>
              <Card.Body>
                <img
                  src={staffprofile}
                  alt=""
                  className={`${styles.iconDashboard2}`}
                />
                <span className={`${styles.infoJadwal}`}>dr. Morty</span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <FaIdCard className={`${styles.iconDashboard3}`} />
                  <span className={`${styles.infoJadwal}`}>190148901702</span>
                </span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <img
                    src={ward}
                    alt=""
                    className={`${styles.iconDashboard}`}
                  />
                  <span className={`${styles.infoJadwal}`}>Neurology</span>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Button variant="btn btn-danger" style={{ marginTop: "50px" }}>
              Delete
            </Button>{" "}
          </Col>
        </Row>

        <Paginations />

        <br />
        <br />

        <hr style={{ width: "70vw" }} />
        <br />
      </div>
    );
}
