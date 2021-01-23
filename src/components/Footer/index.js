import React from "react";
import { Link } from "@reach/router";
import { Row, Col } from "antd";
import {
  FooterImg,
  ImgReflektaFooter,
  TextFooterInvita,
  TextFooterLista,
} from "./styled";
import fondo_abajo from "../../images/fondo_abajo.png";
import Recurso51logo_abajo from "../../images/Recurso51logo_abajo.png";

export const Footer = () => {
  return (
    <>
      <FooterImg src={fondo_abajo} alt="Footer" />
      <Row justify="space-around" align="middle">
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "40px",
            paddingLeft: "100px",
          }}>
          <Link to="/">
            <TextFooterLista>Inicio</TextFooterLista>
          </Link>
          <Link to="/registrate">
            <TextFooterLista>Regístrate</TextFooterLista>
          </Link>
          <Link to="/directorio">
            <TextFooterLista>Directorio</TextFooterLista>
          </Link>
          <Link to="/calendario">
            <TextFooterLista>Calendario</TextFooterLista>
          </Link>
          <Link to="/contactanos">
            <TextFooterLista>Contáctanos</TextFooterLista>
          </Link>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}>
          <ImgReflektaFooter src={Recurso51logo_abajo} alt="Logo Reflekta" />
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}>
          <TextFooterInvita>
            Invita a organizaciones y ciudadanos a <br />
            unirse a Reflekta.
          </TextFooterInvita>
        </Col>
      </Row>
    </>
  );
};
