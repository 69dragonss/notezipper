import React from "react";
import "./MainScreen.css";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainBack">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <div>
                <h1 className="heading"> {title}. </h1>
                <hr />
              </div>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
