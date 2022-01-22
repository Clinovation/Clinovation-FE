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
import Paginations from "../pagination";
import styles from "../manageAccountAllNursesComponents/AllNurseAccounts.module.css";
export default function AllNurseAccounts() {
  const checkName = / ^(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$ /;
  const [nurse, setNurse] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [error, setError] = useState();

  const fetch = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    if (nurse.by === "") {
      axios
        .get(`${API_URL}/nurse/?page=${page}`, GenerateAxiosConfig())
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
    } else if (checkName.test(nurse.by)) {
      axios
        .get(
          `${API_URL}/nurse/queryName?name=${by}&page=${page}`,
          GenerateAxiosConfig()
        )
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
    } else {
      axios
        .get(
          `${API_URL}/nurse/queryNik?nik=${by}&page=${page}`,
          GenerateAxiosConfig()
        )
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
    }
  };

  useEffect(() => {
    fetch(1, "");
  }, [setNurse]);

  const handlePage = (index) => {
    fetch(index, nurse.by);
  };
  const onChange = (e) => {
    const value = e.target.value;
    setNurse({ ...nurse, by: value });
  };
  return (
    <div>
      <div className={`${styles.title2} d-flex`}>
        <div className={`${styles.title} mr-auto p-2`}>All Nurse Accounts</div>
        <div class="col-md-5 p-2">
          <div class="input-group">
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

            <InputGroup className="mb-3" size="sm" style={{width: '350px'}}>
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
                  Nurse {item.name.slice(0,5)}
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
            <Button variant="btn btn-danger" className={`${styles.btndelete}`}>
              Delete
            </Button>{" "}
          </Col>
        </Row>
      ))}

      <div className="d-flex justify-content-center">
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
