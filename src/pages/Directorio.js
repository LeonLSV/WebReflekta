import React from "react";
import { Layout, Row, Col } from "antd";

import { DirectorioChecks } from "../components/DirectorioChecks";
import { DirectorioTarjetas } from "../components/DirectorioTarjetas";
import { ImgBannerDirectorio, ContainerNoneLayout } from "../styles/directorio";

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
      <ContainerNoneLayout display="inline" display991="none">
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
      </ContainerNoneLayout>
      <ContainerNoneLayout display="none" display991="inline">
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <DirectorioChecks />
            <DirectorioTarjetas />
          </Col>
        </Row>
      </ContainerNoneLayout>
    </>
  );
};
