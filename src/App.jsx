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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const mainContainerStyle = isMobile ? {
    margin: "20px 30px 20px 20px",
  } : {
    margin: "20px auto",
    padding: "0 10%",
    maxWidth: "1600px",
  };

  const hardSkillsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: isMobile ? "0" : "0 10%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const aboutContainerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "1200px",
  };

  return (
    <React.Fragment>
      <Box sx={mainContainerStyle}>
        <Header />
        <Home />
      </Box>
      <Box display="flex" justifyContent="center" my={25} width="100%">
        <Box width="90%" height="10px" borderRadius={10} backgroundColor="#d8cccc84" />
      </Box>

      <Box display="flex" justifyContent="center">
        <Box sx={aboutContainerStyle}>
          <About />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" my={25} width="100%">
        <Box width="90%" height="2px" backgroundColor="#d8cccc84" />
      </Box>

      <Box sx={hardSkillsContainerStyle}>
        <HardSkills />
      </Box>

      <Box display="flex" justifyContent="center" my={25} width="100%">
        <Box width="90%" height="2px" backgroundColor="#d8cccc84" />
      </Box>

      <Box sx={mainContainerStyle}>
        <Projects />
      </Box>

      <Box display="flex" justifyContent="center" my={25} width="100%">
        <Box width="90%" height="2px" backgroundColor="#d8cccc84" />
      </Box>

      <Box sx={mainContainerStyle}>
        <Experience />
      </Box>

      <Footer />
    </React.Fragment>
  );
}

export default App;
