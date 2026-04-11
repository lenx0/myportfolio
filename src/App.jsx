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

const SectionDivider = () => (
  <Box display="flex" justifyContent="center" my={8} width="100%">
    <Box
      width="80%"
      height="1px"
      borderRadius={10}
      sx={{ background: "linear-gradient(90deg, transparent, rgba(68,89,100,0.25), transparent)" }}
    />
  </Box>
);

function App() {
  return (
    <React.Fragment>
      <Box
        component="div"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "rgba(250, 250, 250, 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(68, 89, 100, 0.12)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        }}
      >
        <Header />
      </Box>

      <Box sx={{ maxWidth: "1400px", margin: "0 auto", px: { xs: 3, sm: 5, md: 8 } }}>
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <HardSkills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
      </Box>

      <Footer />
    </React.Fragment>
  );
}

export default App;
