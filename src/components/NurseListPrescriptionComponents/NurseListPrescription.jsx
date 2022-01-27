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
import { Link } from "react-router-dom";
import NurseFormAddPrescription from "../NurseFormAddPrescriptionComponents/NurseFormAddPrescription";
import SidebarNurse from "../SideBarNurseComponents/SideBarNurse";
import { API_URL } from "../../utils/const";
function ModalAddPrescription(props) {
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
            Add Prescription
          </h4>
        </div>
        <NurseFormAddPrescription />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function NurseListPrescription() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <ModalAddPrescription
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Container fluid>
        <Row>
          <Col md="1">
            <SidebarNurse />
          </Col>

          <Col md={11} className="mt-4">
            <Row>
              <div class="d-flex bd-highlight">
                {/* <div class="p-2 bd-highlight">
                  <Link to="/addPrescription">
                  <Button variant="success" onClick={() => setModalShow(true)}>
                    Add New Prescription
                  </Button>
                  </Link>
                </div> */}

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
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Patient</th>
                  <th>Medication</th>
                  <th>Notes</th>
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
                  {/* <td>
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
                  </td> */}
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NurseListPrescription;
