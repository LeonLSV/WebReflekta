import React from "react";
import { Row, Col } from "antd";
import { ImgOrganizaciones, BotonOrganizaciones } from "./styled";
import organizaciones from "../../images/organi.png";
import jovenes from "../../images/jovenes.png";
import ciudadanos from "../../images/ciudadanos.png";

import Boton_orgs_jov from "../../images/Boton_orgs_jov.png";
import boton_orgs from "../../images/boton_orgs.png";
import boton_ciud from "../../images/boton_ciud.png";

const alineacion = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Organizaciones = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ margin: "90px 60px" }}>
        <Col xl={8} md={12} xs={24} style={alineacion}>
          <ImgOrganizaciones src={organizaciones} alt="organizaciones" />
          <BotonOrganizaciones src={boton_orgs} alt="Boton organizaciones" />
        </Col>
        <Col xl={8} md={12} xs={24} style={alineacion}>
          <ImgOrganizaciones src={jovenes} alt="organizaciones" />
          <BotonOrganizaciones
            src={Boton_orgs_jov}
            alt="Boton organizaciones"
          />
        </Col>
        <Col xl={8} md={12} xs={24} style={alineacion}>
          <ImgOrganizaciones src={ciudadanos} alt="organizaciones" />
          <BotonOrganizaciones src={boton_ciud} alt="Boton organizaciones" />
        </Col>
      </Row>
    </>
  );
};
