import React from 'react'
import { Button,Card, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../icons/staffProfile.png'

function CardListPatientDoctor() {
    return (
        <div>
            <Container> 
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
                       
                        <Card style={{ marginBottom: '10px', overflowX : "auto", width : "1000px" }}>
                            <Card.Body  style={{ overflowX : "auto" }}>
                                <div class="d-flex bd-highlight">
                                    <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "56px"}}/></div>
                                    {/* <div className="d-flex bd-highlight"> */}
                                        <div class="p-2 bd-highlight mt-3"><div>Ralph</div></div>
                                        <div class="p-2 bd-highlight mt-3"><div>32 Years old</div></div>
                                        <div class="p-2 bd-highlight mt-3"><div>710481048018</div></div>
                                        <div class="ms-auto p-2 bd-highlight mt-3"><Link to="/medical-record"><Button variant="info" size="sm">Patient Record</Button></Link></div>
                                    {/* </div> */}
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default CardListPatientDoctor
