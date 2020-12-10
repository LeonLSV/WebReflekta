import React from "react";
import {
  GlobalNavbar,
  ContainerLogo,
  ButtonNavbar,
  LogoNavbar,
  ContainerButton,
} from "./styles";
import Logo from "../../images/reflekta.png";

export const Navbar = () => {
  return (
    <>
      <GlobalNavbar>
        <ContainerLogo>
          <LogoNavbar src={Logo} alt="Logo Reflekta"></LogoNavbar>
        </ContainerLogo>
        <ContainerButton>
          <ButtonNavbar>Regístrate</ButtonNavbar>
          <ButtonNavbar>Directorio</ButtonNavbar>
          <ButtonNavbar>Calendario</ButtonNavbar>
          <ButtonNavbar>Contáctanos</ButtonNavbar>
        </ContainerButton>
      </GlobalNavbar>
    </>
  );
};
