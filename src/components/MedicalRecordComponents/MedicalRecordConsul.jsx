import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Form,Button, Row, Col, Container, Modal} from "react-bootstrap"
import style from './MedicalRecord.module.css'
import {Link} from 'react-router-dom'
import SideBarDoctor from '../SideBarDoctorComponents/SideBarDoctor'
import FormAddPrescription from '../FormAddPrescriptionComponents/FormAddPrescription'
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";

function ModalAddPrescription(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#F7F7F7" }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            Add Prescription
          </h4>
        </div>
        <FormAddPrescription />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "red" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MedicalRecordConsul() {
  const [modalShow, setModalShow] = useState(false);
  const { uuid } = useParams();
  const initialValue = {
    name: "",
    nik: "",
    dob: "",
    sex: "",
    address: "",
    status_martial: "",
    height: "",
    weight: "",
    record:"",
    consultation: "",
  };
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState();

  const fetch = (uuid) => {
    const API_URL = "http://184.72.154.87:8080/api/v1";
    axios
      .get(`${API_URL}/medicalRecord/${uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else if (res.status === 404) {
          setError("No record found");
        } else {
          console.log(res)
          setForm((state) => {
            
            return {
              ...state,
              name: res.data.data.name,
              nik: res.data.data.nik,
              address: res.data.data.address,
              dob: res.data.data.dob,
              sex: res.data.data.sex,
              height: res.data.data.height,
              weight: res.data.data.weight,
              record: res.data.data.new_record,
              consultation: res.data.data.consultation,
              status_martial: res.data.data.status_martial,
            };
          });
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

  useEffect(() => {
    fetch(uuid);
  }, [setForm]);
  console.log(form)
    return (
        <div>
            <ModalAddPrescription
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container fluid>
            <Row>
                <Col md="1">
                        <SideBarDoctor/>
                </Col>

                <Col md={6} className='m-auto my-2'>
                <h2>Patient Medical Record</h2>
                    {/* <Form> */}
                        <div className={`${style.cardForm} mt-4`}>
                            <h5>Profile</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Name
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.name}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Date of Birth
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.dob}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Sex
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.sex}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Address
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.address}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Martial Status
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.status_martial}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Patient Height
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.height}</p>
                              </Col>
                            </Form.Group>

                            <Form.Group
                              as={Row}
                              className="mb-3"
                            >
                              <Form.Label column md="3">
                                Patient Weight
                              </Form.Label>
                              <Col md="9">
                                <p>:  {form.weight}</p>
                              </Col>
                            </Form.Group>

                           
                      
                            <h5>Medical Record</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet 
                                vestibulum rhoncus quis pellentesque. Sit ut pellentesque accumsan tellus 
                                at diam accumsan faucibus. Adipiscing tortor, ac turpis sociis. Vitae eget 
                                nisi gravida luctus dolor, id ornare. Placerat viverra lectus ullamcorper 
                                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae amet ipsum. */}
                              {form.record}
                            </p>
                            
                            <h5>Consultation</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet 
                                vestibulum rhoncus quis pellentesque. Sit ut pellentesque accumsan tellus 
                                at diam accumsan faucibus. Adipiscing tortor, ac turpis sociis. Vitae eget 
                                nisi gravida luctus dolor, id ornare. Placerat viverra lectus ullamcorper 
                                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae amet ipsum. */}
                              {form.record}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            {/* <Link to="/addPrescription"> */}
                                <Button type="submit" variant="info" onClick={() => setModalShow(true)}>
                                  <div style={{color: "white"}}>Add Prescription</div>
                                </Button>
                            {/* </Link> */}
                        </div>
                        
                    {/* </Form> */}
                </Col>
            </Row>
            </Container>
            <br/>
        </div>
    )
}

export default MedicalRecordConsul
