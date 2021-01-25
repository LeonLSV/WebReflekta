import React from "react";
import {
  IMGTarjetaDirectorio,
  TituloTarjetas,
  ParrafoTarjetas,
  IconosTarjetas,
  ContenedorIconos,
  FondoTarjeta,
} from "./styled";

import { Col, Row } from "antd";

import manosdirectorio from "../../images/manosdirectorio.png";
import logoglobal from "../../images/logoglobal.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import web from "../../images/web.png";
import instagram from "../../images/instagram.png";

const Tarjeta = {
  // background: "#dcdcdc",
  // borderRadius: "30px",
  // padding: "15px 30px",
  // marginRight: "30px",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const DirectorioTarjetas = () => {
  return (
    <>
      <Row style={Tarjeta}>
        <FondoTarjeta>
          <Col lg={4} md={10} xs={12}>
            <IMGTarjetaDirectorio src={logoglobal} alt="Global shapers logo" />
          </Col>
          <Col lg={4} md={10} xs={12}>
            <IMGTarjetaDirectorio src={manosdirectorio} alt="foto manos" />
          </Col>

          <Col lg={14} md={20} xs={24}>
            <TituloTarjetas>Global Shapers Cancún.</TituloTarjetas>
            <ParrafoTarjetas size376="16px" sizee="18px" color="black">
              Intercambio del conocimiento a través de espacios de diálogo
              públicos y privados, y actividades que involucran el beneficio de
              personas en comunidades
            </ParrafoTarjetas>
            <ParrafoTarjetas size376="12px" size="16px" color="gray">
              #CambioClimático #EmprendimientoSustentable #Educación
              #Participación
            </ParrafoTarjetas>
            <ContenedorIconos>
              <IconosTarjetas src={facebook} alt="facebook icono" />
              <IconosTarjetas src={instagram} alt="instagram icono" />
              <IconosTarjetas src={twitter} alt="twitter icono" />
              <IconosTarjetas src={web} alt="web icono" />
            </ContenedorIconos>
          </Col>
        </FondoTarjeta>
      </Row>
    </>
  );
};
