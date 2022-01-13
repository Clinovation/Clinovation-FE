import React from 'react'
import Background from "../../images/doctor.jpg"
import { Row, Col} from "react-bootstrap";
import CardMenuLogin from '../../components/CardMenuLoginComponents/CardMenuLogin';

function MenuLogin() {
    return (
        <div>
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
        </div>
    )
}

export default MenuLogin