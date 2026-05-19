import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./global.css";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import HardSkills from "./components/HardSkills";
import Stats from "./components/Stats";

function App() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Animated background */}
      <Box className="bg-grid" />
      <Box className="bg-orb bg-orb-1" />
      <Box className="bg-orb bg-orb-2" />
      <Box className="bg-orb bg-orb-3" />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Box component="main">
          <Home />
          <Stats />
          <About />
          <HardSkills />
          <Projects />
          <Experience />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;

