import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import doctorIcon from '../../icons/staffProfile.png'
import Sidebar from '../../components/SideBarDoctorComponents/SideBarDoctor'
import CardDashboardDoctor from '../../components/DashboardDoctorComponents/DashboardDoctor'
import { Link } from 'react-router-dom'


function DashboardDoctor() {
    return (
        <div>
            <Row>
                <Col md="1">
                    <Sidebar/>
                </Col>
                
                <Col md="11" className='mr-5'>
                    <Container className='m-0 p-0'>
                        <div className="d-flex justify-content-end mt-2">
                            <div className='d-flex flex-row'>
                                <Link to="/updateProfileDoctor">
                                    <img src={doctorIcon} style={{height : "36px"}}/>
                                </Link>
                                
                                <h6 className="p-2">dr.Morris</h6>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <CardDashboardDoctor/>
                        </div>
                        
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardDoctor
