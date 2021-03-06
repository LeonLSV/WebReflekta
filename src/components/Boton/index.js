import React from "react";
import boton from "../../images/boton_directorio.png";
import { Row, Col, Carousel } from "antd";
import { Link } from "@reach/router";

import { BotonDirectorio, Aliados } from "./styled";

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const BotonMedio = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ margin: "70px" }}>
        <Col xl={8} lg={12} md={14} sm={20} xs={24}>
          <Link to="/directorio">
            <BotonDirectorio src={boton} alt="Boton Directorio" />
          </Link>
          <Aliados>Aliados</Aliados>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Dev Hood</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};
