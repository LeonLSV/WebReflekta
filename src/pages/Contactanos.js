import React from "react";
import { Row, Col, Input } from "antd";
import contactanos from "../images/Recurso44contactanos.png";
import { IMGcontactanos, BotonEnviarFormulario } from "../styles/contactanos";
import enviar from "../images/enviar.png";

const { TextArea } = Input;

const onChange = (e) => {
  console.log(e);
};

const Sombra = {
  boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
};

export const Contactanos = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "700px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <IMGcontactanos src={contactanos} alt="Contactanos" />
        </Col>
      </Row>

      <Row
        justify="center"
        align="middle"
        style={{ height: "700px", background: "white" }}>
        <Col span={16}>
          <Input
            style={Sombra}
            placeholder="Tu nombre"
            allowClear
            onChange={onChange}
          />
          <br />
          <br />
          <Input
            style={Sombra}
            placeholder="Tu correo"
            allowClear
            onChange={onChange}
          />
          <br />
          <br />
          <Row style={Sombra}>
            <TextArea placeholder="Tu mensaje" allowClear onChange={onChange} />
          </Row>
          <Row justify="center" align="middle">
            <BotonEnviarFormulario src={enviar} alt="boton enviar" />
          </Row>
        </Col>
      </Row>
    </>
  );
};
