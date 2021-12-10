import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", justifyContent: "center" }}
      className="my-4 w-100"
    >
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>Copyrights previlige company rights claim@0.5</Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
