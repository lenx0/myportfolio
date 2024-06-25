import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import HardSkills from "./components/HardSkills";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const mainContainerStyle = {
    margin: "0 auto",
    padding: "0 10%",
    maxWidth: "1600px",
  };

  const hardSkillsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 10%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const aboutContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 10%",
    width: "100px",
  }

  return (
    <React.Fragment>
      <Box sx={mainContainerStyle}>
        <Header />
        <Home />
      </Box>
      <Box sx={aboutContainerStyle}>
        <About />
      </Box>
      <Box sx={hardSkillsContainerStyle}>
        <HardSkills />
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
