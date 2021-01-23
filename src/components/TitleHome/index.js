import React from "react";
import { IlustracionImg, Title, ButtonTitle } from "./styles";
import { Row, Col } from "antd";
import ilustracion from "../../images/ilustr.png";
import { QueEsReflekta } from "../QueEsReflekta";
import { Link } from "@reach/router";

export const TitleHome = () => {
  return (
    <>
      <Row
        justify="space-between"
        align="middle"
        style={{
          marginTop: "100px",
        }}>
        <Col
          xl={12}
          lg={12}
          md={24}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Title top={"80px"} size={"27px"}>
            Una plataforma de jóvenes <br />
            cancunenses para transformar <br />
            nuestra comunidad
          </Title>
          <Title top={"80px"} size={"35px"}>
            ¡Regístrate!
          </Title>
          <Row justify="space-around" align="middle" style={{ width: "100%" }}>
            <Col xl={8} lg={10} xs={13}>
              <ButtonTitle>Comunidad</ButtonTitle>
            </Col>

            <Col xl={8} lg={10} xs={13}>
              <Link to="/registrate">
                <ButtonTitle>Organizaciones</ButtonTitle>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xl={10} lg={12} md={0}>
          <IlustracionImg src={ilustracion} alt="Ilustracion" />
        </Col>
      </Row>
      <QueEsReflekta />
    </>
  );
};
