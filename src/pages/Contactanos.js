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
      <Row justify="center" align="middle" style={{ height: "750px" }}>
        <Col
          xl={20}
          md={20}
          xs={18}
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
        <Col xl={18} md={16} xs={20}>
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
            <Col md={4} xs={8}>
              <BotonEnviarFormulario src={enviar} alt="boton enviar" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
