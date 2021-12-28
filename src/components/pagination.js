import React from "react";
import { Pagination, Col } from "react-bootstrap";
export default function Paginations() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Col md="5"></Col>
      <Col md="7">
        <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
          <br />
        </div>
      </Col>
    </div>
  );
}
