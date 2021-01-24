import React from "react";
import { Row, Col } from "antd";
import arrow from "../images/arrow.png";
import registroreflekta from "../images/registroreflekta.png";
import { IMGregistrate, IMGarrow } from "../styles/registrate";
import { Organizaciones } from "../components/Organizaciones";

const alineacion = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};
const alineacionArrow = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Registrate = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "700px" }}>
        <Col xl={14} sm={14} xs={24} style={alineacion}>
          <IMGregistrate src={registroreflekta} alt="flecha" />
        </Col>
        <Col xl={10} sm={10} style={alineacionArrow}>
          <IMGarrow src={arrow} alt="flecha" />
        </Col>
      </Row>
      <Row style={{ marginTop: "60px", background: "white" }}>
        <Organizaciones />
      </Row>
    </>
  );
};
