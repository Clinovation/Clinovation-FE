import {React,useState} from "react";
import {Form,Button, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom";

function FormAddPrescription() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <div>
            <Row className='mt-5'>
                <Col md={6} className="m-auto">
                    <h5>Add Prescription</h5>
                    <div style={{borderTop : "2px solid black", paddingBottom : "10px"}}></div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <div className="cardForm">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Date
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="date" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid date.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Patient
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid Patient.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Sympton
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid Date of Sympton.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Medication
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid Medication.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Note
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid Note.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            New Record
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid record.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                       
                    </div>
                    <Link to="/listPrescription">
                        <Button type="submit" variant="success"style={{marginRight : "20px"}}>Save</Button>
                    </Link>
                    
                    <Link to="/listPrescription">
                        <Button type="submit" variant="warning">Back</Button>   
                    </Link>
                    
                    </Form>

                </Col>
            </Row>
        </div>
    )
}

export default FormAddPrescription
