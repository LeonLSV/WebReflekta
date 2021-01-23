import React from "react";
import { Row, Col } from "antd";
import lupa from "../../images/lupaa.png";
import manos from "../../images/manoss.png";
import mundo from "../../images/mundoo.png";
import comunidad from "../../images/comunidad.png";

import conecta from "../../images/movil_conecta.png";
import comparte from "../../images/movil_comparte.png";
import comunidadmovil from "../../images/movil_comunidad.png";
import conoce from "../../images/movil_conoce.png";

import {
  ImgIconos,
  TextoIconos,
  TituloIconos,
  ImgIconosMovil,
  OcultarYno,
} from "./styled";

const alineacion = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Iconos = () => {
  return (
    <>
      <OcultarYno display2="none">
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
              Regístrate y recibe los llamados a la acción en Cancún
              semanalmente.
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
      </OcultarYno>
      <OcultarYno display="none" display2="inline">
        <Row justify="center" align="middle" style={{ marginTop: "40px" }}>
          <Col md={12} sm={20} style={alineacion}>
            <ImgIconosMovil src={conoce} alt="conoce" />
          </Col>
          <Col md={12} sm={20} style={alineacion}>
            <ImgIconosMovil src={conecta} alt="conecta" />
          </Col>
          <Col md={12} sm={20} style={alineacion}>
            <ImgIconosMovil src={comunidadmovil} alt="comunidad" />
          </Col>
          <Col md={12} sm={20} style={alineacion}>
            <ImgIconosMovil src={comparte} alt="comparte" />
          </Col>
        </Row>
      </OcultarYno>
    </>
  );
};
