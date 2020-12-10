import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { Iconos } from "./components/Iconos";
import { Calendario } from "./components/Calendar";
import { ReflektaBaner } from "./components/ReflektaBaner";

export const App = () => {
  return (
    <>
      <GlobalStyles>
        <Home />
        <Iconos />
        <Calendario />
        <ReflektaBaner />
      </GlobalStyles>
    </>
  );
};
