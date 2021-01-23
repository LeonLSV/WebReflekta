import React from "react";
import { TitleHome } from "../components/TitleHome";
import { Iconos } from "../components/Iconos";
import { Calendario } from "../components/Calendar";
import { ReflektaBaner } from "../components/ReflektaBaner";
import { BotonMedio } from "../components/Boton";
import { Organizaciones } from "../components/Organizaciones";

export const Home = () => {
  return (
    <>
      <TitleHome />
      <Iconos />
      <Calendario />
      <ReflektaBaner />
      <BotonMedio />
      <Organizaciones />
    </>
  );
};
