import React, { useEffect, useState } from "react";
import axios from "axios";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import {
  Table,
  Button,
  InputGroup,
  FormControl,
  Pagination,
  Row,
  Modal,
  Col,
} from "react-bootstrap";
import FormAddWorkHour from "./FormAddWorkHour";
import FormEditWorkHour from "./FormEditWorkHour";
import FormAddWorkDay from "./FormAddWorkDay";
import FormEditWorkDay from "./FormEditWorkDay";

function ModalAddWorkDay(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {/* <img
              src={HealthCare}
              style={{ height: "50px", marginRight: "10px" }}
            /> */}
            Add Work Day
          </h4>
        </div>
        <FormAddWorkDay />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ModalEditWorkDay(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {/* <img
              src={HealthCare}
              style={{ height: "50px", marginRight: "10px" }}
            /> */}
            Edit Work Day
          </h4>
        </div>
        <FormEditWorkDay uuid={props.uuid} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ModalAddWorkHour(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {/* <img
              src={HealthCare}
              style={{ height: "50px", marginRight: "10px" }}
            /> */}
            Add Work Hour
          </h4>
        </div>
        <FormAddWorkHour />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ModalEditWorkHour(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          <div class="d-flex justify-content-end">
            <img
              src={Logo}
              style={{ height: "100px" }}
              class="d-flex justify-content-end"
            />
          </div>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {/* <img
              src={HealthCare}
              style={{ height: "50px", marginRight: "10px" }}
            /> */}
            Edit Work Hour
          </h4>
        </div>
        <FormEditWorkHour uuid={props.uuid} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function ListWorkDayHour() {
  const [modalShowWorkDay, setModalShowWorkDay] = useState(false);
  const [modalShowWorkDayEdit, setModalShowWorkDayEdit] = useState(false);
  const [modalShowWorkHour, setModalShowWorkHour] = useState(false);
  const [modalShowWorkHourEdit, setModalShowWorkHourEdit] = useState(false);

  const [stateUuid, setStateUuid] = useState("");

  const [workDay, setWorkDay] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });

  const [workHour, setWorkHour] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });

  const [error, setError] = useState({
    workDay: "",
    workHour: "",
  });

  const fetchWorkDay = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    if (workDay.by === "") {
      axios
        .get(
          `${API_URL}/workDay/pagination?page=${page}`,
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
            setWorkDay((state) => {
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
            setError({
              ...error,
              workDay: error.response.data.meta.messages[0],
            });
            console.log(error);
          }
        });
    } else {
      axios
        .get(
          `${API_URL}/workDay/queryDay?day=${by}&page=${page}`,
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
            setWorkDay((state) => {
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
            setError({
              ...error,
              workDay: error.response.data.meta.messages[0],
            });
            console.log(error);
          }
        });
    }
  };

  const fetchWorkHour = (page, by) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    if (workDay.by === "") {
      axios
        .get(
          `${API_URL}/workHour/pagination?page=${page}`,
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
            setWorkHour((state) => {
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
            setError({
              ...error,
              workHour: error.response.data.meta.messages[0],
            });
            console.log(error);
          }
        });
    } else {
      axios
        .get(
          `${API_URL}/workHour/queryHour?hour=${by}&page=${page}`,
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
            setWorkHour((state) => {
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
            setError({
              ...error,
              workHour: error.response.data.meta.messages[0],
            });
            console.log(error);
          }
        });
    }
  };

  useEffect(() => {
    fetchWorkDay(1, "");
    fetchWorkHour(1, "");
  }, [setWorkDay, setWorkHour]);

  const handlePageWorkDay = (index) => {
    fetchWorkDay(index, workDay.by);
  };

  const handlePageWorkHour = (index) => {
    fetchWorkHour(index, workHour.by);
  };

  const onClickDeleteWorkDay = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/workDay/${item.uuid}`, GenerateAxiosConfig())
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
          setError(error.response.data.errors[0]);
          console.log(error);
        }
      });
  };

  const onClickDeleteWorkHour = (item) => {
    // const API_URL = process.env.BE_API_URL;
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/workHour/${item.uuid}`, GenerateAxiosConfig())
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
          setError(error.response.data.errors[0]);
          console.log(error);
        }
      });
  };

  const onChangeWorkDaySearch = (e) => {
    const value = e.target.value;
    setWorkDay({ ...workDay, by: value });
  };

  const onChangeWorkHourSearch = (e) => {
    const value = e.target.value;
    setWorkHour({ ...workHour, by: value });
  };

  return (
    <div>
      <div>
        <h3>Work Day List</h3>
        <ModalAddWorkDay
          show={modalShowWorkDay}
          onHide={() => setModalShowWorkDay(false)}
        />
        <ModalEditWorkDay
          uuid={stateUuid}
          show={modalShowWorkDayEdit}
          onHide={() => setModalShowWorkDayEdit(false)}
        />
        <Col>
          <Row>
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                {/* <Link to="/addPrescription"> */}
                <Button
                  variant="success"
                  onClick={() => {
                    setModalShowWorkDay(true);
                  }}
                >
                  Add New Work Day
                </Button>
                {/* </Link> */}
              </div>

              <div class="ms-auto p-2 bd-highlight">
                <InputGroup
                  className="mb-3"
                  size="sm"
                  style={{ width: "300px" }}
                >
                  <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="search"
                    name="search"
                    value={workDay.by}
                    onChange={onChangeWorkDaySearch}
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Row>

          <Table responsive="sm" className="mt-1">
            {error.workDay && (
              <p className="text-center text-dark mt-5">{error.workDay}</p>
            )}
            <thead>
              <tr>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {workDay?.data?.map((item) => (
                <tr>
                  <td>{item.day}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button
                      variant="warning"
                      style={{ marginRight: "10px" }}
                      size="sm"
                      onClick={() => {
                        setModalShowWorkDayEdit(true);
                        setStateUuid(item.uuid);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onClickDeleteWorkDay(item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-4">
            {workDay && (
              <Pagination className="align-self-center">
                {workDay.pages.map((item) => (
                  <Pagination.Item
                    key={item}
                    active={item === workDay.currPage}
                    onClick={() => handlePageWorkDay(item)}
                  >
                    {item}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </div>
        </Col>
      </div>

      <div style={{ marginTop: "15vh" }}>
        <h3>Work Hour List</h3>
        <ModalAddWorkHour
          show={modalShowWorkHour}
          onHide={() => setModalShowWorkHour(false)}
        />
        <ModalEditWorkHour
          uuid={stateUuid}
          show={modalShowWorkHourEdit}
          onHide={() => setModalShowWorkHourEdit(false)}
        />
        <Col>
          <Row>
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                {/* <Link to="/addPrescription"> */}
                <Button
                  variant="success"
                  onClick={() => {
                    setModalShowWorkHour(true);
                  }}
                >
                  Add New Work Hour
                </Button>
                {/* </Link> */}
              </div>

              <div class="ms-auto p-2 bd-highlight">
                <InputGroup
                  className="mb-3"
                  size="sm"
                  style={{ width: "300px" }}
                >
                  <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={workHour.by}
                    onChange={onChangeWorkHourSearch}
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Row>

          <Table responsive="sm" className="mt-1">
            {error.workHour && (
              <p className="text-center text-dark mt-5">{error.workHour}</p>
            )}
            <thead>
              <tr>
                <th>Hour</th>
              </tr>
            </thead>
            <tbody>
              {workHour?.data?.map((item) => (
                <tr>
                  <td>{item.hour}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button
                      variant="warning"
                      style={{ marginRight: "10px" }}
                      size="sm"
                      onClick={() => {
                        setModalShowWorkHourEdit(true);
                        setStateUuid(item.uuid);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onClickDeleteWorkHour(item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-4">
            {workHour && (
              <Pagination className="align-self-center">
                {workHour.pages.map((item) => (
                  <Pagination.Item
                    key={item}
                    active={item === workHour.currPage}
                    onClick={() => handlePageWorkHour(item)}
                  >
                    {item}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </div>
        </Col>
      </div>
    </div>
  );
}
