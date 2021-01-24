import React, { useState } from "react";
import {
  GlobalNavbar,
  ContainerLogo,
  ButtonNavbar,
  LogoNavbar,
  ContainerButton,
  ContainerMenu,
} from "./styles";
import Logo from "../../images/reflekta.png";
import { Hero } from "../Hero";
import { Link } from "@reach/router";
import { Row, Col, Drawer, Button } from "antd";

import { MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <GlobalNavbar>
            <ContainerLogo>
              <Link to="/">
                <LogoNavbar src={Logo} alt="Logo Reflekta"></LogoNavbar>
              </Link>
              <ContainerMenu>
                <Button
                  style={{
                    background: "transparent",
                    border: "none",
                    margin: "10px 0px",
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                    height: "60px",
                  }}
                  onClick={showDrawer}>
                  <MenuOutlined />
                </Button>
                <Drawer
                  title="Menú"
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={visible}>
                  <Link to="/">Inicio</Link>
                  <br />
                  <Link to="/registrate">Regístrate</Link>
                  <br />
                  <Link to="/directorio">Directorio</Link>
                  <br />
                  <Link to="/calendario">Calendario</Link>
                  <br />
                  <Link to="/contactanos">Contáctanos</Link>
                </Drawer>
              </ContainerMenu>
            </ContainerLogo>

            {/* // */}

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

            {/* // */}
          </GlobalNavbar>
          <Hero />
        </Col>
      </Row>
    </>
  );
};
