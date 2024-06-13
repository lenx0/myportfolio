import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <Grid container spacing={2} mt={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: { xs: "center", md: "left" }, p: { xs: 2, md: 0 } }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, color: "#445964", mb: 5 }}
          >
            Desenvolvedor Front-End
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#445964", mb: 5 }}
          >
            Seja bem-vindo(a) ao meu portfólio
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: 18,
              backgroundColor: "#263138",
              width: { xs: "100%", sm: 310 },
              height: 65,
              borderRadius: 20,
              mb: 5,
            }}
          >
            Saiba mais sobre mim
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={HomeArt} alt="Home Art" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
