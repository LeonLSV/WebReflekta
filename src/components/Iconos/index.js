import React from "react";
import { Row, Col } from "antd";
import lupa from "../../images/lupaa.png";
import manos from "../../images/manoss.png";
import mundo from "../../images/mundoo.png";
import comunidad from "../../images/comunidad.png";
import { ImgIconos, TextoIconos, TituloIconos } from "./styled";

export const Iconos = () => {
  return (
    <>
      <Row
        gutter={32}
        justify="center"
        style={{
          marginTop: "200px",
          paddingBottom: "100px",
          marginLeft: "0",
          marginRight: "0",
        }}>
        <Col
          span={5}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={lupa} alt="" />
          <TituloIconos>Conoce</TituloIconos>
          <TextoIconos>A las organizaciones sociales de Cancún.</TextoIconos>
        </Col>

        <Col
          span={5}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={manos} alt="" />
          <TituloIconos>Conecta</TituloIconos>
          <TextoIconos>
            Con las que quieras para unirte a cambiar el mundo.
          </TextoIconos>
        </Col>
        <Col
          span={5}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={comunidad} alt="" />
          <TituloIconos>Haz comunidad.</TituloIconos>
          <TextoIconos>
            Regístrate y recibe los llamados a la acción en Cancún semanalmente.
          </TextoIconos>
        </Col>
        <Col
          span={5}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={mundo} alt="" />
          <TituloIconos>Comparte</TituloIconos>
          <TextoIconos>
            El contenido de Reflekta para unirnos cada vez más.
          </TextoIconos>
        </Col>
      </Row>
    </>
  );
};
