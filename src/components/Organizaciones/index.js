import React from "react";
import { Row, Col } from "antd";
import { ImgOrganizaciones } from "./styled";
import organizaciones from "../../images/organi.png";
export const Organizaciones = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <ImgOrganizaciones src={organizaciones} alt="organizaciones" />
        </Col>
        <Col span={8}>
          <ImgOrganizaciones src={organizaciones} alt="organizaciones" />
        </Col>
        <Col span={8}>
          <ImgOrganizaciones src={organizaciones} alt="organizaciones" />
        </Col>
      </Row>
    </>
  );
};
