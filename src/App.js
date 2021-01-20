import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { Iconos } from "./components/Iconos";
import { Calendario } from "./components/Calendar";
import { ReflektaBaner } from "./components/ReflektaBaner";
import { Footer } from "./components/Footer";
import { BotonMedio } from "./components/Boton";
import { Organizaciones } from "./components/Organizaciones";

export const App = () => {
  return (
    <>
      <GlobalStyles>
        <Home />
        <Iconos />
        <Calendario />
        <ReflektaBaner />
        <BotonMedio />
        <Organizaciones />
        <Footer />
      </GlobalStyles>
    </>
  );
};
