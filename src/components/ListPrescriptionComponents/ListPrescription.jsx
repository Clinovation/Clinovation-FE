import React from 'react'
import {Table, Button, Container, InputGroup,FormControl, Row} from "react-bootstrap"
import { Link } from 'react-router-dom'

function ListPrescription() {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div class="d-flex bd-highlight">
                        <div class="p-2 bd-highlight">
                            <Link to="/addPrescription">
                                <Button variant="success">Add New Prescription</Button>
                            </Link>
                        </div>
                    
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

                <Table responsive="sm" className='mt-1'>
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
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ListPrescription
