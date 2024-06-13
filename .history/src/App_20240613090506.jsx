import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./global.css";

import Projects from "./components/Projects";

function App() {
  const mainContainerStyle = {
    margin: "0 10%",
  };

  const aboutContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <React.Fragment>
      <Box xs={1} sx={mainContainerStyle}>
        <Header />
        <Home />
      </Box>
      <Box sx={aboutContainerStyle}>
        <About />
      </Box>
      <Projects />
    </React.Fragment>
  );
}

export default App;
