import React from "react";
import { Row, Col } from "antd";
import queesreflekta from "../../images/quees.png";
import { QueEsReflektaImg, QueEsReflektaImgXS } from "./styled";
import ReactPlayer from "react-player/youtube";

export const QueEsReflekta = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ marginTop: "150px" }}>
        <Col
          xl={0}
          lg={0}
          md={0}
          sm={20}
          xs={20}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <QueEsReflektaImgXS src={queesreflekta} alt="¿Que es reflekta?" />
        </Col>
        <Col
          xl={10}
          lg={11}
          md={12}
          sm={20}
          xs={20}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ReactPlayer
            style={{ height: "100px" }}
            url="https://www.youtube.com/embed/-dI4oTssDhE"
          />
        </Col>
        <Col
          xl={10}
          lg={11}
          md={0}
          sm={0}
          xs={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <QueEsReflektaImg src={queesreflekta} alt="¿Que es reflekta?" />
        </Col>
      </Row>
    </>
  );
};
