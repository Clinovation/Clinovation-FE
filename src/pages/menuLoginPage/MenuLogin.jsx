import React from 'react'
import Background from "../../images/doctor.jpg"
import { Row, Col, Container} from "react-bootstrap";
import CardMenuLogin from '../../components/CardMenuLoginComponents/CardMenuLogin';

function MenuLogin() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <CardMenuLogin/>
                    </Col>
                    <Col className="pe-0 me-0">
                        <div style={{textAlign: 'end'}}>
                            <img src={Background} style={{height: "100vh"}} className="pe-0 me-0"/> 
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default MenuLogin
