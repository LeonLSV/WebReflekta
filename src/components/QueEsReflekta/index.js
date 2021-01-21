import React from "react";
import { Row, Col } from "antd";
import queesreflekta from "../../images/quees.png";
import { QueEsReflektaImg } from "./styled";
import ReactPlayer from "react-player/youtube";

export const QueEsReflekta = () => {
  return (
    <>
      <Row style={{ marginTop: "150px" }}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ReactPlayer url="https://www.youtube.com/embed/-dI4oTssDhE" />
        </Col>
        <Col
          span={12}
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
