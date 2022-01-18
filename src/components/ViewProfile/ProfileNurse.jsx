import React from 'react'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'
import Avatar from "../../icons/nurse-icon.png";
import SideBarMedStaff from '../SideBarMedStaffComponents/SideBarMedStaff';
import style from './ViewProfile.module.css'
import {Link} from 'react-router-dom'

function ProfileNurse() {
    return (
        <div>
            <Container className='my-4' fluid>
            <Row>
                <Col md="1">
                    <SideBarMedStaff/>
                </Col>
                
                <Col md={6} className="m-auto">
                    <div className='d-flex justify-content-center mb-3'>
                        <img src={Avatar} style={{height: "130px"}}/>
                    </div>
                    
                    <Form noValidate >
                        <div className={style.cardForm}>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Name
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="name" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Password
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="password" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Date of Birth
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Sex
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Email
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Contact
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>
                            
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Work Experience
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Schedule
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Work Hour
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column md="3">
                                Specialist
                            </Form.Label>
                            <Col md="9">
                                <Form.Control type="text" required/>
                            </Col>
                            </Form.Group>
                        </div>
                    </Form>
                    <div className='d-flex justify-content-between'>
                        <Link to='/dashboardStaff'>
                            <Button variant="warning">Back To Home</Button>
                        </Link>
                        
                        <Button variant="danger">Delete</Button>
                    </div>
                </Col>
            </Row>
            </Container>
            <br/>
        </div>
    )
}

export default ProfileNurse
