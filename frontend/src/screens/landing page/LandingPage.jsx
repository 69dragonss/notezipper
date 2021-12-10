import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="d-flex flex-column justify-content-center w-100">
            <div className="mx-auto">
              <h1 className="heading">Welcome to notezipper</h1>
              <p className="para    ">
                this is supposed to be the landing page for website
              </p>
            </div>
            <div className="d-flex w-100 justify-content-center">
              <Link
                // href="/login"
                to="/login"
                className="btn-primary btn-lg px-3 py-3 mx-4 rounded"
              >
                Login
              </Link>
              <Link
                // href="/signup"
                to="/signup"
                className="btn-primary btn-lg px-3 py-3 rounded"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
