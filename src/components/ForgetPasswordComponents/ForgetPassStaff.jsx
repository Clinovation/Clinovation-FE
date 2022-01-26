import React, { useState } from "react";
import { Form, Button, Col, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import useValidateForm from "../../hooks/useValidateForm";
import axios from "axios";
import useHandleLogin from "../../hooks/doctor/useHandleLogin";
import { API_URL } from "../../utils/const";
import style from "../ForgetPasswordComponents/ForgetPass.module.css"

function ForgetPassStaff() {
    const { validateForm } = useValidateForm();
    const [form, setForm] = useState({
        email: "",
        password: "",
        nik: "",
    });
    return (
        <div>
            <Form noValidate >
                <div className={style.cardForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    type="email"
                    required
                    name="email"
                    // value={form.email}
                    // onChange={onChange}
                    // onBlur={onBlur}
                    // isInvalid={!!errorMsg.email || !!errorMsg.auth}
                    />
                    <Form.Control.Feedback type="invalid">
                    {/* {errorMsg.email} */}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                    type="text"
                    required
                    name="nik"
                    // value={form.email}
                    // onChange={onChange}
                    // onBlur={onBlur}
                    // isInvalid={!!errorMsg.email || !!errorMsg.auth}
                    />
                    <Form.Control.Feedback type="invalid">
                    {/* {errorMsg.email} */}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                    type="password"
                    required
                    name="password"
                    // value={form.password}
                    // onChange={onChange}
                    // onBlur={onBlur}
                    // isInvalid={!!errorMsg.password || !!errorMsg.auth}
                    />
                    <Form.Control.Feedback type="invalid">
                    {/* {errorMsg.password} */}
                    </Form.Control.Feedback>
                </Form.Group>
                <br />
                {/* <p className="text-danger ms-1">{errorMsg.auth}</p> */}
                </div>
                <div className="d-flex justify-content-center">
                <Button type="submit" variant="info" size="lg">
                    <div style={{color: "white"}}>
                        Confirm
                    </div>
                </Button>
                </div>
            </Form>
            <br />
        </div>
    );
}

export default ForgetPassStaff;
