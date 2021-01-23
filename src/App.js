import React from "react";
import { Router } from "@reach/router";
import { GlobalStyles } from "./styles/globalStyles";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contactanos } from "./pages/Contactanos";
import { Registrate } from "./pages/Registrate";
import { Navbar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <GlobalStyles>
        <Navbar />
        <Router>
          <Home exact path="/" />
          <Contactanos exact path="/contactanos" />
          <Registrate exact path="/registrate" />
        </Router>
        <Footer />
      </GlobalStyles>
    </>
  );
};
