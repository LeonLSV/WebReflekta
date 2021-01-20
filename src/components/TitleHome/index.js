import React from "react";
import { ContainerButton, IlustracionImg, Title, ButtonTitle } from "./styles";
import { Row, Col } from "antd";
import ilustracion from "../../images/ilustr.png";
import { QueEsReflekta } from "../QueEsReflekta";

export const TitleHome = () => {
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Col
          span={10}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Title top={"220px"} size={"27px"}>
            Una plataforma de jóvenes cancunenses para transformar nuestra
            comunidad
          </Title>
          <Title top={"100px"} size={"35px"}>
            ¡Regístrate!
          </Title>
          <ContainerButton>
            <ButtonTitle>Comunidad</ButtonTitle>
            <ButtonTitle>Organizaciones</ButtonTitle>
          </ContainerButton>
        </Col>
        <Col span={14}>
          <IlustracionImg src={ilustracion} alt="Ilustracion" />
        </Col>
      </Row>
      <QueEsReflekta />
    </>
  );
};
