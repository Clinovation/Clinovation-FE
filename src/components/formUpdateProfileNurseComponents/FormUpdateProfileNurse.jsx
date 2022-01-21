import { React, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../icons/nurse-icon.png";
export default function FormUpdateProfileNurse() {
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
      <Row className="my-4">
        <Col md={6} className="m-auto">
          <h2 className="mb-3">Hello Nurse,</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="cardForm">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  <img src={avatar} style={{ height: "48px" }} />
                </Form.Label>
                <Col md="9">
                  <Form.Control type="file" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Name
                </Form.Label>
                <Col md="9">
                  <Form.Control type="name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Password
                </Form.Label>
                <Col md="9">
                  <Form.Control type="password" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Date Of Birth
                </Form.Label>
                <Col md="9">
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Date of Birth.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Sex
                </Form.Label>
                <Col md="9">
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid sex.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Email
                </Form.Label>
                <Col md="9">
                  <Form.Control type="email" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Contact
                </Form.Label>
                <Col md="9">
                  <Form.Control type="phone" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid height.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <div
                style={{ borderTop: "2px solid black", padding: "10px" }}
              ></div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Experience
                </Form.Label>
                <Col md="9">
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid number.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Schedule
                </Form.Label>
                <Col md="9">
                  <Form.Select aria-label="Default select example">
                    <option disabled>Specialist</option>
                    <option value="1">One</option>
                    <option value="3">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid specialist.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Work Hour
                </Form.Label>
                <Col md="9">
                  <Form.Select aria-label="Default select example">
                    <option disabled>Specialist</option>
                    <option value="1">One</option>
                    <option value="3">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid specialist.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>

            <div class="d-flex">
              <div class="mr-auto p-2">
                <Link to="/dashboardNurse">
                  <Button
                    type="submit"
                    variant="success"
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                </Link>

                <Link to="/dashboardNurse">
                  <Button variant="warning" style={{ marginRight: "10px" }}>
                    Back to Home
                  </Button>
                </Link>
              </div>
              <div class="p-2">
                <Button variant="danger">Logout</Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
