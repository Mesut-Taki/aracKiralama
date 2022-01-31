import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  FiPhoneCall,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiUser,
} from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col xs={7}>
            <FiPhoneCall size={16} />
            <span className="d-none d-md-inline">CALL US</span> +90 486 81 72
          </Col>
          <Col x={5}>
            <ul>
              s
              <li className="d-none d-md-block">
                <FiYoutube />
              </li>
              <li className="d-none d-md-block">
                <FiFacebook />
              </li>
              <li className="d-none d-md-block">
                <FiTwitter />
              </li>
              <li className="d-none d-md-block">
                <FiInstagram />
              </li>
              <li>
                <Button size="sm">
                  <FiUser />
                  Login
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
