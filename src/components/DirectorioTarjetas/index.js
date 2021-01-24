import React from "react";
import { ContainerTarjeta } from "./styled";

import { Col, Row } from "antd";

const Tarjeta = {
  background: "#c5c4c4",
  borderRadius: "30px",
  padding: "0 30px",
  marginRight: "30px",
  marginBottom: "30px",
};

export const DirectorioTarjetas = () => {
  return (
    <>
      <Row style={Tarjeta}>
        <Col>Imagen</Col>
        <Col>Imagen 2</Col>
        <Col>
          <h1>Global Shapers Cancún.</h1>
          <h1>
            Intercambio del conocimiento a través de espacios de diálogo
            públicos y privados, y actividades que involucran el beneficio de
            personas en comunidades
          </h1>
          <h1>
            #CambioClimático #EmprendimientoSustentable #Educación
            #Participación
          </h1>
          <h1>Iconos de reddes</h1>
        </Col>
      </Row>
    </>
  );
};
