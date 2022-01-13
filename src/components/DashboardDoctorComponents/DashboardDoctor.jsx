import React from 'react'
import { Button,Card, Col, Container, Row } from 'react-bootstrap'
import Avatar from '../../icons/staffProfile.png'
import patientvisit from '../../icons/patientvisit.svg'
import aidkit from '../../icons/firstaidkit.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'
import style from '../DashboardDoctorComponents/DashboardDoctor.module.css'

function CardDashboardDoctor() {
    // const URL = "https://api.kawalcorona.com/"

    const URL =
	"https://api.thenewsapi.com/v1" +
	"/news/top?api_token=zZ9yRPDK4tiBAkdRnLsPVaszpafDprZ6pJVOnbYL&locale=id&language=id";


    const [patient, setPatient] = useState([]);
    const [err, setError] = useState("")

    useEffect(() => {
        const handleFetch = async () =>{
            let result;
            try{
                result = await axios.get(URL)
                setPatient(result)
                console.log(patient.data.data)
            } catch (error){
                setError(error)
            }
        }  
        handleFetch();
        
    }, [])

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-center'>
                    <Row className="g-4">
                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Patient Treated <img src={aidkit} style={{ width: '24px' }}/></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                                    <Card.Text>
                                    20 Patients
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Patient Visits <img src={patientvisit} style={{ width: '24px' }}/></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                                    <Card.Text>
                                    20 Patients
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
                <div className='d-flex justify-content-center mt-5'>
                <Card style={{ padding: '30px' }}>
                    <Card.Title>Patient</Card.Title>
                    <Card style={{ marginBottom: '10px' }}>
                        <Card.Body className={style.responsiveCard}>
                            <div class="d-flex bd-highlight">
                                <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "24px"}}/></div>
                                <div class="p-2 bd-highlight" style={{ width: '58px' }}><div>Ralph</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '102px' }}><div>32 Years old</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '130px' }}><div>710481048018</div></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="info" size="sm">Patient Record</Button></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="warning" size="sm">Done</Button></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Card>
                
                </div>
                
            </Container>
        </div>
    )
}

export default CardDashboardDoctor
