import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

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
        <Button
          variant="contained"
          sx={{
            fontSize: 18,
            backgroundColor: "#263138",
            width: 310,
            height: 65,
            borderRadius: 20,
            mb: 5,
          }}
        >
          Saiba mais sobre mim
        </Button>
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
