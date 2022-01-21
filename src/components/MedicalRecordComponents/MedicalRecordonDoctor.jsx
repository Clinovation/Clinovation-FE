import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Button, Row, Col, Container} from "react-bootstrap"
import style from './MedicalRecord.module.css'
import {Link} from 'react-router-dom'
import SideBarMedStaff from '../SideBarMedStaffComponents/SideBarMedStaff'
import {
  GenerateAxiosConfig,
  HandleDate,
  HandleLowerCase,
  HandleUnauthorized,
} from "../../utils/helpers";
import SideBarDoctor from "../SideBarDoctorComponents/SideBarDoctor";

function MedicalRecord() {
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
  };
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState();

  const fetch = (uuid) => {
    const API_URL = "http://3.83.92.188:8080/api/v1";
    axios
      .get(`${API_URL}/patient/${uuid}`, GenerateAxiosConfig())
      .then((res) => {
        if (res.status === 204) {
          setError("No record found");
        } else if (res.status === 404) {
          setError("No record found");
        } else {
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
              record: res.data.data.record,
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
            <Container fluid>
            <Row>
                <Col md="1">
                    <SideBarDoctor/>
                </Col>

                <Col md={6} className="m-auto">
                    <h3 className='my-4'>Patient Medical Record</h3>
                    {/* <Form> */}
                        <div className={`${style.cardForm} m-auto`}>
                            <h5>Profile</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p><strong>Name           :</strong> {form.name}</p>
                            <p><strong>NIK            :</strong> {form.nik}</p>
                            <p><strong>Date of Birth  :</strong> {form.dob}</p>
                            <p><strong>Sex            :</strong> {form.sex}</p>
                            <p><strong>Address        :</strong> {form.address}</p>
                            <p><strong>Martial Status :</strong> {form.status_martial}</p>
                            <p><strong>Patient Height :</strong> {form.height}</p>
                            <p><strong>Patient Weight :</strong> {form.weight}</p>
                            <br/>

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
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                            <Link to='/listPatienDoctor'>
                                <Button type="submit" variant="warning" size='lg'>Back to All Patient</Button>
                            </Link>
                            
                        </div>
                        <br/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default MedicalRecord
