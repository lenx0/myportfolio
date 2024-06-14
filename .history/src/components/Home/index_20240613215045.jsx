import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import scrollToSection from "../Utility/scroll";
import "./Styles/styles.css";

const Home = () => {
  return (
    <Grid mt={5} container direction="row" alignItems="center" wrap="nowrap">
      <Grid item xs={12} md={6}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#445964", mb: 5 }}>
          Desenvolvedor Front-End
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#445964", mb: 5 }}>
          Seja bem-vindo(a) ao meu portfólio
        </Typography>
        <button
          className="button"
          onClick={() => scrollToSection('about-section')}
        >
          <a href="#"><span>Saiba mais sobre mim</span></a>
        </button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img src={HomeArt} alt="Home Art" style={{ maxWidth: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
