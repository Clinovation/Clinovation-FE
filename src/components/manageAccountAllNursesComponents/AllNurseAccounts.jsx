import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { FaSearch, FaIdCard } from "react-icons/fa";
import manicon from "../../icons/man.png";
import { FcClock } from "react-icons/fc";
import ward from "../../icons/bed.png";
import nurseicon from "../../icons/nurse-icon.png";
import { GiStethoscope } from "react-icons/gi";
import { API_URL } from "../../utils/const";
import Paginations from "../pagination";
import styles from "../manageAccountAllNursesComponents/AllNurseAccounts.module.css";

export default function AllNurseAccounts() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;
  const [nurse, setNurse] = useState({
    // by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [filter, setFilter] = useState("")
  const [error, setError] = useState();

  const fetch = (page, name) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    // if (nurse.by === "") {
      axios
        .get(`${API_URL}/nurse/queryName?name=${name}&page=${page}`, GenerateAxiosConfig())
        .then((res) => {
          if (res.status === 204) {
            setNurse({
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
            setNurse((state) => {
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
    // } else if (checkName.test(nurse.by)) {
    //   axios
    //     .get(
    //       `${API_URL}/nurse/queryName?name=${by}&page=${page}`,
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
    //         setNurse((state) => {
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
    //     .get(
    //       `${API_URL}/nurse/queryNik?nik=${by}&page=${page}`,
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
    //         setNurse((state) => {
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
  }, [setNurse]);

  const handlePage = (index) => {
    fetch(index, filter);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  const onClickDelete = (item) => {
    // const API_URL = process.env.BE_API_URL;
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .delete(`${API_URL}/nurse/${item.uuid}`, GenerateAxiosConfig())
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
  console.log(nurse)
  return (
    <div>
      <div className={`${styles.title2} d-flex`}>
        <Row>
          <Col md="10">
            <div className={`${styles.title} mr-auto p-2`}>
              All Nurse Accounts
            </div>
          </Col>
          <Col md="2">
            {/* <div class="col-md-5 p-2">
          <div class="input-group"> */}
            {/* <input
              class="form-control border-end-0 border"
              type="search"
              name="search"
              value={nurse.by}
              onChange={onChange}
              placeholder="search"
              id="example-search-input"
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

            <InputGroup className="mb-3" size="sm" style={{ width: "350px" }}>
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
          </Col>
        </Row>
      </div>
      {/* </div>
      </div> */}
      {error && <p className="text-center text-dark mt-5">{error}</p>}
      {nurse?.data?.map((item) => (
        <Row>
          <Col md="7">
            <Card className={`${styles.kartu3}`}>
              <Card.Body>
                <img
                  src={nurseicon}
                  alt=""
                  className={`${styles.iconDashboard2}`}
                />
                <span className={`${styles.infoJadwal}`}>
                  Nurse {item.name.slice(0, 5)}
                </span>
                <span style={{ marginRight: "0px", marginLeft: "10px" }}>
                  <FaIdCard className={`${styles.iconDashboard3}`} />
                  <span className={`${styles.infoJadwal}`}>{item.nik}</span>
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

      <div className={`${styles.paginations}`}>
        {nurse && (
          <Pagination className="align-self-center">
            {nurse.pages.map((item) => (
              <Pagination.Item
                key={item}
                active={item === nurse.currPage}
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
