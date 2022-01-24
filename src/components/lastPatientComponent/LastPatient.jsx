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
        <Card.Body className="d-flex justify-content-between">
          <img src={manicon} alt="" className={`${styles.iconDashboard2}`} />
          <div className="mt-3">Paul</div>
          <div className="mt-3">
            <FcClock/>
            <span>
              5 Dec / 12 PM
            </span>
          </div>

          <div className="mt-3">
            <img src={ward} alt="" className={`${styles.iconDashboard}`} />
            <span>
              Neurology
            </span>
          </div>

          <div className="mt-3">
            <GiStethoscope />
            <span>
              dr. Morty
            </span>
          </div>
        </Card.Body>
      </Card>
      <Paginations className={`${styles.paginations}`} />
    </div>
  );
}
