import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../images/Logo.png"
import Avatar from "../../icons/staffProfile.png"
import Home from "../../icons/home-page.png"
import MedicalRecord from "../../icons/medical-record.png"
import Medical from "../../icons/medical.png"
import style from "../SideBarDoctorComponents/SideBarDoctor.module.css"

function SideBarDoctor() {
    return (
        <div>
            <div>
            <Link to="/dashboard">
                <img src={Logo} className='logo' style={{ height : "80px" }}/>
            </Link>

            </div>
            
            <div>
                <div className={style.navIconContainer}>
                    <div className={style.navIconItem}>
                        <img src={Avatar} style={{ height : "24px" }}/>
                        <p style={{fontSize: "10px"}}>Ralph Murphy</p>
                    </div>
                    
                    <Link to="/dashboard" className='m-auto'>
                        <img src={Home} style={{ height : "24px" }}/>
                    </Link>
                    <Link to="/prescription" className='m-auto'>
                        <img src={MedicalRecord} style={{ height : "24px" }}/>
                    </Link>
                    <Link to="/list-patient" className='m-auto'>
                        <img src={Medical} style={{ height : "24px" }}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SideBarDoctor
