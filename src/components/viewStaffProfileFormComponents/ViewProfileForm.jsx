import { React, useState } from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import "react-phone-number-input/style.css";

import { Link } from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import styles from "../viewStaffProfileFormComponents/ViewProfileForm.module.css";

export default function ViewProfileForm() {
  const [contact, setContact] = useState();
  return (
    <div>
      <div className={`${styles.cardstyle}`}>
        <Card className={`${styles.kartu2}`}>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    placeholder="Name"
                    value="Ralph Murphy"
                    readonly
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formPlaintextPassword"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value="xxxxxxxx"
                    readonly
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="dob"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Date of Birth
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value="2 December 1997"
                    readonly
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Sex
                </Form.Label>
                <Col sm="10">
                  <Form.Select aria-label="Default select example">
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    placeholder="email@example.com"
                    value="ralph@mail.com"
                    readonly
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className={`${styles.formsection}`}
              >
                <Form.Label column sm="2">
                  Contact
                </Form.Label>
                <Col sm="10">
                  <PhoneInput
                    defaultCountry="ID"
                    value={contact}
                    onChange={setContact}
                    international
                    countryCallingCodeEditable={false}
                    readonly
                  />
                </Col>
              </Form.Group>
            </Form>
            <br />
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <Button variant="outline-success" className={`${styles.tombol}`}>
        Save
      </Button>{" "}
      <Link to="/dashboardStaff" className="m-auto">
        <Button variant="outline-warning" className={`${styles.tombol}`}>
          Back to Home
        </Button>{" "}
      </Link>
      <Button variant="outline-danger" className={`${styles.tombol2}`}>
        Logout
      </Button>{" "}
    </div>
  );
}
