import React, { useEffect, useState } from "react";
import axios from "axios";
import { GenerateAxiosConfig, HandleUnauthorized } from "../../utils/helpers";
import {
  Table,
  Button,
  Pagination,
  InputGroup,
  FormControl,
  Row,
  Modal,
  Col,
} from "react-bootstrap";
import FormAddMedicine from "./FormAddMedicine";
import FormEditMedicine from "./FormEditMedicine";
import { API_URL } from "../../utils/const";
function ModalAddMedicine(props) {
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
            Add Medicine
          </h4>
        </div>

        <FormAddMedicine />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ModalEditMedicine(props) {
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
            Edit Medicine
          </h4>
        </div>
        <FormEditMedicine uuid={props.uuid} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function InputMedicine() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);

  const [stateUuid, setStateUuid] = useState("");

  const [medicine, setMedicine] = useState({
    by: "",
    data: [],
    currPage: 1,
    pages: [],
  });
  const [error, setError] = useState();

  const onChange = (e) => {
    const value = e.target.value;
    setMedicine({ ...medicine, by: value });
  };

  const fetch = (page, by) => {
    // const API_URL = "http://184.72.154.87:8080/api/v1";
    if (medicine.by === "") {
      axios
        .get(`${API_URL}/medicine/?page=${page}`, GenerateAxiosConfig())
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
            setMedicine((state) => {
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
          `${API_URL}/medicine/queryName?name=${by}&page=${page}`,
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
            setMedicine((state) => {
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
  }, [setMedicine]);

  const handlePage = (index) => {
    fetch(index, medicine.by);
  };

  const onClickDelete = (item) => {
    // const API_URL = process.env.BE_API_URL;
    // const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .delete(`${API_URL}/medicine/${item.uuid}`, GenerateAxiosConfig())
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

  return (
    <div>
      <div>
        <ModalAddMedicine show={modalShow} onHide={() => setModalShow(false)} />
        <ModalEditMedicine
          uuid={stateUuid}
          show={modalShowEdit}
          onHide={() => setModalShowEdit(false)}
        />
        <Col>
          <Row>
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">
                {/* <Link to="/addPrescription"> */}
                <Button
                  variant="success"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Add New Medicine
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
                    value={medicine.by}
                    onChange={onChange}
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    type="search"
                    name="search"
                  >
                    Search
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Row>

          <Table responsive="sm" className="mt-1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {medicine?.data?.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  {/* <td></td> */}
                  <td>
                    <Button
                      variant="warning"
                      style={{ marginRight: "10px" }}
                      size="sm"
                      onClick={() => {
                        setModalShowEdit(true);
                        setStateUuid(item.uuid);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onClickDelete(item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {error && <p className="text-center text-dark mt-5">{error}</p>}
          <div className="d-flex justify-content-center mt-4">
            {medicine && (
              <Pagination className="align-self-center">
                {medicine.pages.map((item) => (
                  <Pagination.Item
                    key={item}
                    active={item === medicine.currPage}
                    onClick={() => handlePage(item)}
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

export default InputMedicine;
