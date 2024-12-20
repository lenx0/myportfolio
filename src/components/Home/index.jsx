import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import scrollToSection from "../Utility/scroll";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Grid mt={5} container direction={isTablet ? "column" : "row"} marginTop={isTablet ? 10 : 0} textAlign="center" alignItems="center" wrap="nowrap">
      <Grid item xs={12} md={6}>
        <Typography
          // variant={!isMobile ? "h3" : "h4"}
          sx={{
            fontSize:!isMobile? 50 : 40,
            fontWeight: 700,
            mb: 5,
            color: "#445964"
          }}
        >
          DESENVOLVEDOR FRONT-END
        </Typography>

        <Typography
          sx={{
            fontSize: !isMobile ? 20 : 17,
            fontWeight: 700,
            color: "#445964",
            margin: !isMobile? 0 : 5,
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
            fontSize: !isMobile ? 18 : 13,
            backgroundColor: "#263138",
            fontWeight: 'bold',
            width: !isMobile ? 310 : 230,
            height: !isMobile ? 65 : 55,
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
