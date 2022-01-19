import { React, useState } from "react";
import {
  Table,
  Button,
  Container,
  InputGroup,
  FormControl,
  Row,
  Modal,
  Col,
} from "react-bootstrap";
import FormAddWorkHour from "./FormAddWorkHour";
import FormAddWorkDay from "./FormAddWorkDay";

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

export default function ListWorkDayHour() {
  const [modalShowWorkDay, setModalShowWorkDay] = useState(false);
  const [modalShowWorkHour, setModalShowWorkHour] = useState(false);
  return (
    <div>
      <div>
        <h3>Work Day List</h3>
        <ModalAddWorkDay
          show={modalShowWorkDay}
          onHide={() => setModalShowWorkDay(false)}
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
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Row>

          <Table responsive="sm" className="mt-1">
            <thead>
              <tr>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {/* array.forEach(element => {
                
            }); */}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </div>

      <div style={{ marginTop: "15vh" }}>
        <h3>Work Hour List</h3>
        <ModalAddWorkHour
          show={modalShowWorkHour}
          onHide={() => setModalShowWorkHour(false)}
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
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Row>

          <Table responsive="sm" className="mt-1">
            <thead>
              <tr>
                <th>Hour</th>
              </tr>
            </thead>
            <tbody>
              {/* array.forEach(element => {
                
            }); */}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: "10px" }}
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </div>
    </div>
  );
}
