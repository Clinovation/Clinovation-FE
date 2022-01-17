import {React,useState} from "react";
import {Form,Button, Row, Col, Table, Container} from "react-bootstrap"
import Medstaff from "../../icons/healthCare.png"
import style from './FormPatient.module.css'
import Logo from "../../images/Logo.png";

function FormConsul() {
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
            <Container>
                {/* <img src={Logo} className="m-auto"/> */}
                <Row>
                    <Col md={6} className={`${style.cardForm} m-auto mt-3`}>
                        <h3><img src={Medstaff} style={{height: "42px", marginRight:"10px"}}/>Patient Register</h3>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} >
                            <div className="cardForm">
                                <h5>Patient New Medical History</h5>
                                <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={8} />
                                </Form.Group>

                                <h5>Patient Consultation</h5>
                                <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={8} />
                                </Form.Group>
                            </div>
                            <h5>Doctor Schedule</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <div>
                                <Table responsive="sm">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Specialist</th>
                                        <th>Work Hour</th>
                                        <th>Sum Queue</th>
                                        <th>Choose</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button type="submit" variant="success">Submit</Button>
                            </div>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormConsul
