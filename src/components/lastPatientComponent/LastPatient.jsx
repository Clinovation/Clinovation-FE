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
import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import moment from "moment";

export default function LastPatient() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;

  const [patient, setPatient] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [error, setError] = useState();

  const fetch = (page, by) => {
      axios
        .get(`${API_URL}/medicalRecord/medicalStaff/queue?page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setError("No record found");
          } else {
            const page = { ...res.data.page };
            const length = page.total_data / page.limit;
            const active = page.offset / page.limit + 1;
            const items = [];
            for (let i = 0; i < length; i++) {
              items.push(i + 1);
            }
            setPatient((state) => {
              return {
                ...state,
                data: res.data.data,
                currPage: active,
                pages: items,
              };
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            HandleUnauthorized(error.response);
            setError(error.response.data.meta.messages[0]);
            console.log(error);
          }
        });
  };

  useEffect(() => {
    fetch(1, "");
  }, [setPatient]);

  const handlePage = (index) => {
    fetch(index,"");
  };
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
            {/* <div class="ms-auto p-2 bd-highlight">
                <InputGroup className="mb-3" size="sm" style={{width: '300px'}}>
                    <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </div> */}
        </div>
      </div>
      {/* </div> */}
      {error && <p className="text-center text-dark mt-5">{error}</p>}
      {patient?.data?.map((item) => (
      <Card className={`${styles.kartu3}`}>
        <Card.Body className="d-flex justify-content-between">
          <img src={manicon} alt="" className={`${styles.iconDashboard2}`} />
          <div className="mt-3" style={{width: "60px"}}>{item.patient_name.slice(0,5)}</div>
          <div className="mt-3" style={{width: "120px"}}>
            <FcClock/>
            <span>
              {moment(item.created_at).format('ll')}
            </span>
          </div>

          <div className="mt-3">
            <img src={ward} alt="" className={`${styles.iconDashboard}`} />
            <span>
              {item.user_specialist}
            </span>
          </div>

          <div className="mt-3" style={{width: "75px"}}>
            <GiStethoscope />
            <span>
              {item.username.slice(0,5)}
            </span>
          </div>
        </Card.Body>
      </Card>
      ))}
      <div className="d-flex justify-content-center">
          {patient && (
          <Pagination className="align-self-center">
              {patient.pages.map((item) => (
              <Pagination.Item
                  key={item}
                  active={item === patient.currPage}
                  onClick={() => handlePage(item)}
              >
                  {item}
              </Pagination.Item>
              ))}
          </Pagination>
          )}
      </div>
    </div>
  );
}
