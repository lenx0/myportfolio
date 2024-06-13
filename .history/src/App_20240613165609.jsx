import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";

function App() {
  const mainContainerStyle = {
    margin: "0 auto",
    padding: "0 10%", // Use padding instead of margin for internal spacing
    maxWidth: "1200px", // Limit the max width to ensure it doesn't overflow the viewport
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
      </Box>
      <Box sx={mainContainerStyle}>
        <Projects />
      </Box>
    </React.Fragment>
  );
}

export default App;
