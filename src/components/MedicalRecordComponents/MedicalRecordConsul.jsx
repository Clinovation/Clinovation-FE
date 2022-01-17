import React from 'react'
import {Form,Button, Row, Col} from "react-bootstrap"
import style from './MedicalRecord.module.css'
import {Link} from 'react-router-dom'

function MedicalRecordConsul() {
    return (
        <div>
            <Row>
                <Col md={6} className={`${style.formRegisContainer} m-auto my-2`}>
                <h2>Patient Medical Record</h2>
                    <Form>
                        <div className={`${style.cardForm} mt-4`}>
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

                            <h5>Medical Record</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet 
                                vestibulum rhoncus quis pellentesque. Sit ut pellentesque accumsan tellus 
                                at diam accumsan faucibus. Adipiscing tortor, ac turpis sociis. Vitae eget 
                                nisi gravida luctus dolor, id ornare. Placerat viverra lectus ullamcorper 
                                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae amet ipsum.
                            </p>

                            <h5>Consultation</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet 
                                vestibulum rhoncus quis pellentesque. Sit ut pellentesque accumsan tellus 
                                at diam accumsan faucibus. Adipiscing tortor, ac turpis sociis. Vitae eget 
                                nisi gravida luctus dolor, id ornare. Placerat viverra lectus ullamcorper 
                                metus, sagittis, eu. Cursus cursus congue sem ut eu in vitae amet ipsum.
                            </p>
                        </div>
                        <Link to="/add-prescription">
                            <Button type="submit" variant="info">Add Prescription</Button>
                        </Link>
                    </Form>
                </Col>
            </Row> 
        </div>
    )
}

export default MedicalRecordConsul
