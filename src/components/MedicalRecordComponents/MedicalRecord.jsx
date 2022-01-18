import React from 'react'
import {Button, Row, Col, Container} from "react-bootstrap"
import style from './MedicalRecord.module.css'
import {Link} from 'react-router-dom'
import SideBarMedStaff from '../SideBarMedStaffComponents/SideBarMedStaff'

function MedicalRecord() {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col md="1">
                        <SideBarMedStaff/>
                </Col>

                <Col md={6} className="m-auto">
                    <h3 className='my-4'>Patient Medical Record</h3>
                    {/* <Form> */}
                        <div className={`${style.cardForm} m-auto`}>
                            <h5>Profile</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p><strong>Name           :</strong> Paul</p>
                            <p><strong>NIK            :</strong> 33721239123010</p>
                            <p><strong>Date of Birth  :</strong> 01-12-1997</p>
                            <p><strong>Sex            :</strong> Male</p>
                            <p><strong>Address        :</strong> Jl.Pattimura</p>
                            <p><strong>Martial Status :</strong> Married</p>
                            <p><strong>Patient Height :</strong> 180 cm</p>
                            <p><strong>Patient Weight :</strong> 75 kg</p>
                            <br/>

                            <h5>Medical Record</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet 
                                vestibulum rhoncus quis pellentesque. Sit ut pellentesque accumsan tellus 
                                at diam accumsan faucibus. Adipiscing tortor, ac turpis sociis. Vitae eget 
                                nisi gravida luctus dolor, id ornare. Placerat viverra lectus ullamcorper 
                                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae amet ipsum.
                            </p>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                            <Link to='/listPatient'>
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
