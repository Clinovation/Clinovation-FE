import { React, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FormAddMedicine() {
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
      <Row className="mt-1">
        <Col md={10} className="m-auto">
          {/* <h5>Add Prescription</h5> */}
          <div
            style={{ borderTop: "2px solid black", paddingBottom: "10px" }}
          ></div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="cardForm">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Name
                </Form.Label>
                <Col md="9">
                  <Form.Control type="text" required />
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
                  Type
                </Form.Label>
                <Col md="9">
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid type.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Price
                </Form.Label>
                <Col md="9">
                  <Form.Control type="number" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid price.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column md="3">
                  Stock
                </Form.Label>
                <Col md="9">
                  <Form.Control type="number" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid stock.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </div>
            <Link to="/listMedicine">
              <Button
                type="submit"
                variant="success"
                style={{ marginLeft: "15vw", width: "10vw" }}
              >
                Save
              </Button>
            </Link>

            {/* <Link to="/listPrescription">
                        <Button type="submit" variant="warning">Back</Button>   
                    </Link> */}
          </Form>
        </Col>
      </Row>
    </div>
  );
}
