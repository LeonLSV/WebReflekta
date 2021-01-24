import React from "react";
import { Layout, Row, Col } from "antd";

import { DirectorioChecks } from "../components/DirectorioChecks";
import { DirectorioTarjetas } from "../components/DirectorioTarjetas";
import { ImgBannerDirectorio } from "../styles/directorio";

import bannerdirectorio from "../images/bannerdirectorio.png";

const { Sider, Content } = Layout;

export const Directorio = () => {
  return (
    <>
      <Row>
        <Col>
          <ImgBannerDirectorio src={bannerdirectorio} alt="baner" />
        </Col>
      </Row>
      <Layout>
        <Sider
          width="250px"
          style={{
            background: "transparent",
            height: "700px",
            marginTop: "40px",
          }}>
          <DirectorioChecks />
        </Sider>
        <Layout>
          <Content style={{ marginTop: "40px" }}>
            <DirectorioTarjetas />
            <DirectorioTarjetas />
            <DirectorioTarjetas />
            <DirectorioTarjetas />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
