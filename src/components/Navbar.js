import React from "react";
import { Row, Col } from "antd";
import logo from "../img/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <Row>
        <Col span={8}>
          <div className="navbar-logo">
            <img src={logo} width="32" height="32" />
            <span className="navbar-text">Zuckinhobot</span>
          </div>
        </Col>
        <Col span={8} offset={8}>
          {/* authors here */}
        </Col>
      </Row>
    </header>
  );
}
