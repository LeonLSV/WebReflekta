import React from "react";
import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { TitleHome } from "../components/TitleHome";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TitleHome />
    </>
  );
};
