import React from "react";
import { Link } from "@reach/router";
import { Row, Col } from "antd";
import {
  FooterImg,
  ImgReflektaFooter,
  TextFooterInvita,
  TextFooterLista,
  ImgReflektaFooterXS,
  ContainerTextFooterLista,
} from "./styled";
import fondo_abajo from "../../images/fondo_abajo.png";
import Recurso51logo_abajo from "../../images/Recurso51logo_abajo.png";
// import "./index.css";

export const Footer = () => {
  return (
    <>
      <FooterImg src={fondo_abajo} alt="Footer" />
      <Row justify="space-around" align="middle" style={{ marginTop: "60px" }}>
        <Col
          md={0}
          sm={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ImgReflektaFooterXS src={Recurso51logo_abajo} alt="Logo Reflekta" />
        </Col>
        <Col
          md={8}
          sm={24}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          <ContainerTextFooterLista>
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
          </ContainerTextFooterLista>
        </Col>
        <Col
          md={8}
          sm={0}
          xs={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ImgReflektaFooter src={Recurso51logo_abajo} alt="Logo Reflekta" />
        </Col>
        <Col
          md={8}
          sm={24}
          style={{
            textAlign: "center",
            padding: "0 10px",
          }}>
          <TextFooterInvita>
            Invita a organizaciones y ciudadanos a unirse a Reflekta.
          </TextFooterInvita>
        </Col>
      </Row>
    </>
  );
};
