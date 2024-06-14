import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import "./styles.css";
import Abilities from "./components/Abilities";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";

function App() {
  const mainContainerStyle = {
    margin: "0 auto",
    padding: "0 10%",
    maxWidth: "1600px",
  };

  const aboutContainerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0 10%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <React.Fragment>
      <Box sx={mainContainerStyle}>
        <Header />
        <Home />
      </Box>
      <Box sx={aboutContainerStyle}>
        <About />
        <Abilities />
      </Box>
      <Box sx={mainContainerStyle}>
        <Projects />
        <Experience />
      </Box>
      <Footer />
    </React.Fragment>
  );
}

export default App;
