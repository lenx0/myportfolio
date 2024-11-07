import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import scrollToSection from "../Utility/scroll";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Grid mt={5} container direction={isMobile ? "column" : "row"} marginTop={isMobile ? 10 : 0} textAlign="center" alignItems="center" wrap="nowrap">
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 5,
            color: "#445964"
          }}
        >
          DESENVOLVEDOR FULLSTACK
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#445964",
            mb: 5,
            backgroundImage: "linear-gradient(90deg, #263138, #5d176b, #b4e014, #1484e0, #e08e14)",
            backgroundSize: "200%",
            backgroundClip: "text",
            textFillColor: "transparent",
            animation: "gradientFlow 10s infinite linear",
            '@keyframes gradientFlow': {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" }
            },
          }}
        >
          Next | React | React Native | Nest | Node | DevOps
        </Typography>

        <Button
          variant="contained"
          onClick={() => scrollToSection('about-section')}
          sx={{
            fontSize: 18,
            backgroundColor: "#263138",
            fontWeight: 'bold',
            width: 310,
            height: 65,
            borderRadius: 2,
            mb: 5,
            transition: "transform 0.5s ease, color 0.3s ease",
            '&:hover': {
              backgroundColor: "#5d176b",
              color: "#ffffff",
              transform: "scale(1.1)",
            },
          }}
        >
          Saiba mais
        </Button>
      </Grid>
      <Grid mt={8} item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img src={HomeArt} alt="Home Art" style={{ maxWidth: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
