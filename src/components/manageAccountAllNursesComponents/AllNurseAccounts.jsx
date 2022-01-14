import React from "react";
import { FaSearch, FaIdCard } from "react-icons/fa";
import manicon from "../../icons/man.png";
import { FcClock } from "react-icons/fc";
import ward from "../../icons/bed.png";
import nurseicon from "../../icons/nurse-icon.png";
import { GiStethoscope } from "react-icons/gi";
import { Row, Col, Card, Button } from "react-bootstrap";
import Paginations from "../pagination";
import styles from "../manageAccountAllNursesComponents/AllNurseAccounts.module.css";
export default function AllNurseAccounts() {
  return (
    <div>
      <div className={`${styles.title2} d-flex`}>
        <div className={`${styles.title} mr-auto p-2`}>All Nurse Accounts</div>

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
                src={nurseicon}
                alt=""
                className={`${styles.iconDashboard2}`}
              />
              <span className={`${styles.infoJadwal}`}>Nurse Maria</span>
              <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                <FaIdCard className={`${styles.iconDashboard3}`} />
                <span className={`${styles.infoJadwal}`}>190148901702</span>
              </span>
              {/* <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                      <img src={ward} alt="" className={`${styles.iconDashboard}`} />
                      <span
                        className={`${styles.infoJadwal
                        }`}
                        style={{ marginLeft: "2px" }}
                      >
                        Neurology
                      </span>
                    </span> */}
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
                src={nurseicon}
                alt=""
                className={`${styles.iconDashboard2}`}
              />
              <span className={`${styles.infoJadwal}`}>Nurse Carla</span>
              <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                <FaIdCard className={`${styles.iconDashboard3}`} />
                <span className={`${styles.infoJadwal}`}>190148901702</span>
              </span>
              {/* <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                      <img src={ward} alt="" className={`${styles.iconDashboard}`} />
                      <span
                        className={`${styles.infoJadwal
                        }`}
                        style={{ marginLeft: "2px" }}
                      >
                        Neurology
                      </span>
                    </span> */}
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
    </div>
  );
}
