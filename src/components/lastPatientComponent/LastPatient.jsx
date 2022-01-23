import React from "react";
import { FaSearch } from "react-icons/fa";
import manicon from "../../icons/man.png";
import { FcClock } from "react-icons/fc";
import ward from "../../icons/bed.png";
import { GiStethoscope } from "react-icons/gi";
import styles from "../lastPatientComponent/LastPatient.module.css";
import { Card, Pagination, InputGroup, FormControl, Button} from "react-bootstrap";
import Paginations from "../pagination";
import { API_URL } from "../../utils/const";
export default function LastPatient() {
  return (
    <div style={{width: "800px"}}>
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-between">
        <div className={`${styles.title} mr-auto p-2`}>Last Patient</div>

        {/* <div class="row"> */}
        <div>
          {/* <div class="input-group">
            <input
              class="form-control border-end-0 border"
              type="search"
              placeholder="search"
              id="example-search-input"
              style={{ width: "300px" }}
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary bg-white border ms-n5"
                type="button"
              >
                <FaSearch style={{ width: "15px", height: "15px" }} />
              </button>
            </span>
          </div> */}
            <div class="ms-auto p-2 bd-highlight">
                <InputGroup className="mb-3" size="sm" style={{width: '300px'}}>
                    <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </div>
        </div>
      </div>
      {/* </div> */}
      <Card className={`${styles.kartu3}`}>
        <Card.Body>
          <img src={manicon} alt="" className={`${styles.iconDashboard2}`} />
          <span className={`${styles.infoJadwal}`}>Paul</span>
          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <FcClock className={`${styles.iconDashboard3}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              5 Dec / 12 PM
            </span>
          </span>
          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <img src={ward} alt="" className={`${styles.iconDashboard}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              Neurology
            </span>
          </span>

          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <GiStethoscope className={`${styles.iconDashboard3}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              dr. Morty
            </span>
          </span>
        </Card.Body>
      </Card>
      <Card className={`${styles.kartu3}`}>
        <Card.Body>
          <img src={manicon} alt="" className={`${styles.iconDashboard2}`} />
          <span className={`${styles.infoJadwal}`}>Paul</span>
          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <FcClock className={`${styles.iconDashboard3}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              5 Dec / 12 PM
            </span>
          </span>
          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <img src={ward} alt="" className={`${styles.iconDashboard}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              Neurology
            </span>
          </span>

          <span style={{ marginRight: "0px", marginLeft: "10px" }}>
            <GiStethoscope className={`${styles.iconDashboard3}`} />
            <span
              className={`${styles.infoJadwal}`}
              style={{ marginLeft: "2px" }}
            >
              dr. Morty
            </span>
          </span>
        </Card.Body>
      </Card>
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <Paginations className={`${styles.paginations}`} />
    </div>
  );
}
