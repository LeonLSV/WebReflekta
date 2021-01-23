import React from "react";
import {
  GlobalNavbar,
  ContainerLogo,
  ButtonNavbar,
  LogoNavbar,
  ContainerButton,
} from "./styles";
import Logo from "../../images/reflekta.png";
import { Hero } from "../Hero";
import { Link } from "@reach/router";
import { Row, Col } from "antd";

export const Navbar = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <GlobalNavbar>
            <ContainerLogo>
              <Link to="/">
                <LogoNavbar src={Logo} alt="Logo Reflekta"></LogoNavbar>
              </Link>
            </ContainerLogo>
            <ContainerButton>
              <Link to="/registrate">
                <ButtonNavbar>Regístrate</ButtonNavbar>
              </Link>
              <Link to="/directorio">
                <ButtonNavbar>Directorio</ButtonNavbar>
              </Link>
              <Link to="/calendario">
                <ButtonNavbar>Calendario</ButtonNavbar>
              </Link>
              <Link to="/contactanos">
                <ButtonNavbar>Contáctanos</ButtonNavbar>
              </Link>
            </ContainerButton>
          </GlobalNavbar>
          <Hero />
        </Col>
      </Row>
    </>
  );
};
