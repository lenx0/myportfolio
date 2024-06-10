import React from 'react';
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./global.css";

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
      <Box sx={mainContainerStyle}>
        <Header />
        <Home />
      </Box>
      <Box sx={aboutContainerStyle}>
        <About />
      </Box>
    </React.Fragment>
  );
}

export default App;
