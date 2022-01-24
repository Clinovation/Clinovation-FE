import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../manageAccountAllDoctorsComponents/AllDoctorAccounts.module.css";
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import {
  Button,
  Card,
  Container,
  Row,
  InputGroup,
  FormControl,
  Pagination,
  Col,
} from "react-bootstrap";

import staffprofile from "../../icons/staffProfile.png";
import nurseicon from "../../icons/nurse-icon.png";
import ward from "../../icons/bed.png";
import { FaSearch, FaIdCard } from "react-icons/fa";
import Paginations from "../pagination";

export default function AllDoctorAccounts() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;
  const [doctor, setDoctor] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const fetch = (page, name) => {
    const API_URL = "http://184.72.154.87:8080/api/v1";
    // if (doctor.by === "") {
      axios
        .get(`${API_URL}/doctor/queryName?name=${name}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setDoctor({
              data: [],
              currPage: 1,
              pages: [],
					  });
            setError("No record found");
          } else {
            const page = { ...res.data.page };
            const length = page.total_data / page.limit;
            const active = page.offset / page.limit + 1;
            const items = [];
            for (let i = 0; i < length; i++) {
              items.push(i + 1);
            }
            setDoctor((state) => {
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
    // } else if (checkName.test(doctor.by)) {
    //   axios
    //     .get(
    //       `${API_URL}/doctor/?name=${by}&page=${page}`,
    //       GenerateAxiosConfig()
    //     )
    //     .then((res) => {
    //       if (res.status === 204) {
    //         setError("No record found");
    //       } else {
    //         const page = { ...res.data.page };
    //         const length = page.total_data / page.limit;
    //         const active = page.offset / page.limit + 1;
    //         const items = [];
    //         for (let i = 0; i < length; i++) {
    //           items.push(i + 1);
    //         }
    //         setDoctor((state) => {
    //           return {
    //             ...state,
    //             data: res.data.data,
    //             currPage: active,
    //             pages: items,
    //           };
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         HandleUnauthorized(error.response);
    //         setError(error.response.data.meta.messages[0]);
    //         console.log(error);
    //       }
    //     });
    // } else {
    //   axios
    //     .get(`${API_URL}/doctor/?nik=${by}&page=${page}`, GenerateAxiosConfig())
    //     .then((res) => {
    //       if (res.status === 204) {
    //         setError("No record found");
    //       } else {
    //         const page = { ...res.data.page };
    //         const length = page.total_data / page.limit;
    //         const active = page.offset / page.limit + 1;
    //         const items = [];
    //         for (let i = 0; i < length; i++) {
    //           items.push(i + 1);
    //         }
    //         setDoctor((state) => {
    //           return {
    //             ...state,
    //             data: res.data.data,
    //             currPage: active,
    //             pages: items,
    //           };
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         HandleUnauthorized(error.response);
    //         setError(error.response.data.meta.messages[0]);
    //         console.log(error);
    //       }
    //     });
    // }
  };

  useEffect(() => {
    fetch(1, "");
  }, [setDoctor]);

  const handlePage = (index) => {
    fetch(index, filter);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  const onClickDelete = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/doctor/${item.uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else if (res.status === 403) {
          setError("Forbiden");
        } else if (res.status === 500) {
          setError("Internal Server Error");
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
  return (
    <div>
      <div className={`${styles.title2} d-flex`}>
        <div className={`${styles.title} mr-auto p-2`}>All Doctor Accounts</div>

        <div class="col-md-5 p-2">
          <div class="input-group">
            {/* <input
              class="form-control border-end-0 border"
              placeholder="search"
              aria-label="search"
              aria-describedby="basic-addon2"
              type="search"
              name="search"
              value={doctor.by}
              onChange={onChange}
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary bg-white border ms-n5"
                type="button"
                onClick={handlePage}
              >
                <FaSearch style={{ width: "15px", height: "15px" }} />
              </button>
            </span> */}
            <InputGroup className="mb-3" size="sm" style={{width: '350px'}}>
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="search"
                name="search"
                value={filter}
                onChange={onChange}
              />
              <Button 
                variant="outline-secondary" 
                id="button-addon2"
                onClick={() => {fetch(1, filter)}}
                >
              Search
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>

      {error && <p className="text-center text-dark mt-5">{error}</p>}
      {doctor?.data?.map((item) => (
        <Row>
          <Col md="7">
            <Card className={`${styles.kartu3}`}>
              <Card.Body>
                {item.avatar === "" ? (
                  <img
                    src={staffprofile}
                    alt=""
                    className={`${styles.iconDashboard2}`}
                  />
                ) : (
                  <img src={item.avatar} style={{ height: "65px" }} />
                )}
                <span className={`${styles.infoJadwal}`}>dr.{item.name.slice(0,5)}</span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <FaIdCard className={`${styles.iconDashboard3}`} />
                  <span className={`${styles.infoJadwal}`}>{item.nik}</span>
                </span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <img
                    src={ward}
                    alt=""
                    className={`${styles.iconDashboard}`}
                  />
                  <span className={`${styles.infoJadwal}`}>
                    {item.specialist}
                  </span>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Button
              variant="btn btn-danger"
              onClick={() => onClickDelete(item)}
              className={`${styles.btndelete}`}
            >
              Delete
            </Button>{" "}
          </Col>
        </Row>
      ))}
      <div className="d-flex justify-content-center">
        {doctor && (
          <Pagination className="align-self-center">
            {doctor.pages.map((item) => (
              <Pagination.Item
                key={item}
                active={item === doctor.currPage}
                onClick={() => handlePage(item)}
              >
                {item}
              </Pagination.Item>
            ))}
          </Pagination>
        )}
      </div>

      <br />
      <br />

      <hr style={{ width: "70vw" }} />
      <br />
    </div>
  );
}
