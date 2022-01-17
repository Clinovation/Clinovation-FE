import React from 'react'
import { Button,Card, Container, Row, InputGroup, FormControl, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../icons/staffProfile.png'
import SideBarMedStaff from '../SideBarMedStaffComponents/SideBarMedStaff'

function CardListPatientDoctor() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="1">
                        <SideBarMedStaff/>
                    </Col>

                    <Col md="11">
                        <Container className='mt-3'> 
                            <Row>
                                <div class="d-flex bd-highlight">
                                    <div class="p-2 bd-highlight"><h3>Patient Lists</h3></div>
                                
                                    <div class="ms-auto p-2 bd-highlight">
                                        <InputGroup className="mb-3" size="sm" style={{width: '300px'}}>
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
                                
                            <Row>
                                <div className='d-flex justify-content-center mt-5'>
                                
                                    <Card style={{ marginBottom: '10px', width : "900px" }}>
                                        <Card.Body  style={{ overflowX : "auto" }}>
                                            <div class="d-flex bd-highlight">
                                                <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "56px"}}/></div>
                                                <div className="p-2 bd-highlight mt-3"><h6 style={{marginRight: "45px"}}>Ralph</h6></div>
                                                <div className="p-2 bd-highlight mt-3"><h6 style={{marginRight: "45px"}}>32 Years old</h6></div>
                                                <div className="p-2 bd-highlight mt-3"><h6>710481048018</h6></div>
                                                <div className="ms-auto p-2 bd-highlight mt-3">
                                                    <Link to="/medicalRecord">
                                                        <Button variant="info" size="sm" style={{marginRight: "30px"}}><div style={{color: "#ffffff"}}>Patient Record</div></Button>
                                                    </Link>
                                                    <Link to="/inputConsultation">
                                                        <Button variant="info" size="sm"><div style={{color: "#ffffff"}}>Add New Consultation</div></Button>
                                                    </Link>
                                                </div> 
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardListPatientDoctor
