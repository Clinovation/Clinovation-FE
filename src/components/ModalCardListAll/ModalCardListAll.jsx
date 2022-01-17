import iconnurse from "../../icons/nurse.png"
import iconmedstaff from "../../icons/healthCare.png"
import icondoctor from "../../icons/doctor.png"
import iconpatient from "../../icons/man.png"
import { Card } from "react-bootstrap";
import React from "react";
import style from "./ModalCardListAll.module.css"
import { useNavigate } from "react-router-dom";

function ModalCardListAll() {
    const navigate = useNavigate();

    
    const onClickDoctor = () => {
      navigate("/listDoctor");
    };
    const onClickNurse = () => {
      navigate("/listNurse");
    };
    const onClickPatient = () => {
      navigate("/listPatient");
    };
    const onClickStaff = () => {
      navigate("/listStaff");
    };

    return (
        <div className="d-flex justify-content-center">
            <div className={style.modalListContainer}>
                <div>
                    <Card style={{ width: '250px'}} onClick={onClickDoctor}>
                        <div style={{textAlign: 'center'}} className="pt-3">
                            <Card.Img variant="top" src={icondoctor} style={{ width: '100px'}}/>
                        </div>
                        <Card.Body className="py-0">
                            <div style={{ fontWeight: 'Bold' }}>List</div>
                            <Card.Title style={{ fontWeight: 'Bold', fontSize: "28px" }}>Doctor</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                
                <div>
                    <Card style={{ width: '250px'}} onClick={onClickStaff}>
                        <div style={{textAlign: 'center'}} className="pt-3">
                            <Card.Img variant="top" src={iconmedstaff} style={{ width: '100px' }}/>
                        </div>
                        <Card.Body className="py-0">
                            <div style={{ fontWeight: 'Bold' }}>List</div>
                            <Card.Title style={{ fontWeight: 'Bold', fontSize: "28px" }}>Medical staff</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                
                <div>
                    <Card style={{ width: '250px'}} onClick={onClickNurse}>
                        <div style={{textAlign: 'center'}} className="pt-3">
                            <Card.Img variant="top" src={iconnurse} style={{ width: '100px' }}/>
                        </div>
                        <Card.Body className="py-0">
                            <div style={{ fontWeight: 'Bold' }}>List</div>
                            <Card.Title style={{ fontWeight: 'Bold', fontSize: "28px" }}>Nurse</Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '250px'}} onClick={onClickPatient}>
                        <div style={{textAlign: 'center'}} className="pt-3">
                            <Card.Img variant="top" src={iconpatient} style={{ width: '100px' }}/>
                        </div>
                        <Card.Body className="py-0">
                            <div style={{ fontWeight: 'Bold' }}>List</div>
                            <Card.Title style={{ fontWeight: 'Bold', fontSize: "28px" }}>Patient</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ModalCardListAll
