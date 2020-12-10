import React from "react";
import { Row, Col } from "antd";
import lupa from "../../images/lupaa.png";
import manos from "../../images/manoss.png";
import mundo from "../../images/mundoo.png";
import comunidad from "../../images/comunidad.png";
import { ImgIconos, TextoIconos } from "./styled";

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
          span={4}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={lupa} alt="" />
          <h2>Conoce</h2>
          <TextoIconos>A las organizaciones sociales de Cancún.</TextoIconos>
        </Col>

        <Col
          span={4}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={manos} alt="" />
          <h2>Conecta</h2>
          <TextoIconos>
            Con las que quieras para unirte a cambiar el mundo.
          </TextoIconos>
        </Col>
        <Col
          span={4}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={comunidad} alt="" />
          <h2>Haz comunidad.</h2>
          <TextoIconos>
            Regístrate y recibe los llamados a la acción en Cancún semanalmente.
          </TextoIconos>
        </Col>
        <Col
          span={4}
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "9px 8px 12px 0px rgba(0, 0, 0, 0.4)",
          }}>
          <ImgIconos src={mundo} alt="" />
          <h2>Comparte</h2>
          <TextoIconos>
            El contenido de Reflekta para unirnos cada vez más.
          </TextoIconos>
        </Col>
      </Row>
    </>
  );
};
