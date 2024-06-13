import React from "react";
import { Box, Grid } from "@mui/material";
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
      <Grid container sx={mainContainerStyle}>
        <Grid item xs={6} md={6} lg={6} sm={2}>
        <Header />
        <Home />
        </Grid>
      </Grid>
      <Box sx={aboutContainerStyle}>
        <About />
      </Box>
      <Projects />
    </React.Fragment>
  );
}

export default App;
