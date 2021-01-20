import React from "react";
import { Row, Col } from "antd";
import queesreflekta from "../../images/quees.png";
import { QueEsReflektaImg } from "./styled";

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
          <video
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=-dI4oTssDhE&list=RD-dI4oTssDhE&start_radio=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></video>
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
