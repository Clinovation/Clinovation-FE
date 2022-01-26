import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveDayNurse } from "../Redux/DaySliceNurse";
import styles from "./date.module.css"

export default function Date() {
  const dispatch = useDispatch()
  const [dayNurse, setDayNurse] = useState("")

  const onClick = (e) =>{
    const value = e.target.value;
    setDayNurse(value)
    dispatch(saveDayNurse({dayNurse}))
    console.log(dayNurse)
  }

  return (
    <div style={{width: "760px"}} className="m-auto">
      <div className="d-flex justify-content-between">
          <Button value="Monday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Mon</Button>

          <Button value="Tuesday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Tue</Button>

          <Button value="Wednesday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Wed</Button>

          <Button value="Thursday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Thu</Button>

          <Button value="Friday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Fri</Button>

          <Button value="Saturday" variant="info" onClick={onClick} style={{backgroundColor : "white", color : "black"}}>Sat</Button>
        
      </div>
    </div>
  );
}
