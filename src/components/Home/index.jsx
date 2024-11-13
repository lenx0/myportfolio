import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import scrollToSection from "../Utility/scroll";
import { useTheme } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  // Referências e estado para controlar a visibilidade das seções
  const sectionsRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target]));
        } else {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            newSet.delete(entry.target);
            return newSet;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  return (
    <Grid
      mt={5}
      container
      direction={isTablet ? "column" : "row"}
      marginTop={isTablet ? 10 : 0}
      textAlign="center"
      alignItems="center"
      wrap="nowrap"
    >
      {/* Seção Título */}
      <Grid item xs={12} md={6} ref={addToRefs}>
        <Typography
          sx={{
            fontSize: !isMobile ? 50 : 40,
            fontWeight: 700,
            mb: 5,
            color: "#445964",
            opacity: visibleSections.has(sectionsRefs.current[0]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[0])
              ? "translateX(0)"
              : "translateX(-100px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          DESENVOLVEDOR FULLSTACK
        </Typography>

        <Typography
          sx={{
            fontSize: !isMobile ? 20 : 13,
            fontWeight: 700,
            color: "#445964",
            mb: 5,
            backgroundImage:
              "linear-gradient(90deg, #263138, #5d176b, #b4e014, #1484e0, #e08e14)",
            backgroundSize: "200%",
            backgroundClip: "text",
            textFillColor: "transparent",
            animation: "gradientFlow 10s infinite linear",
            opacity: visibleSections.has(sectionsRefs.current[0]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[0])
              ? "translateX(0)"
              : "translateX(100px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            "@keyframes gradientFlow": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        >
          Next | React | React Native | Nest | Node | DevOps
        </Typography>

        <Button
          variant="contained"
          onClick={() => scrollToSection("about-section")}
          sx={{
            fontSize: !isMobile ? 18 : 13,
            backgroundColor: "#263138",
            fontWeight: "bold",
            width: !isMobile ? 310 : 210,
            height: !isMobile ? 65 : 35,
            borderRadius: 2,
            mb: 5,
            transition: "transform 0.5s ease, color 0.3s ease",
            opacity: visibleSections.has(sectionsRefs.current[0]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[0])
              ? "translateX(0)"
              : "translateX(-100px)",
            "&:hover": {
              backgroundColor: "#5d176b",
              color: "#ffffff",
              transform: "scale(1.1)",
            },
          }}
        >
          Saiba mais
        </Button>
      </Grid>

      {/* Seção Imagem */}
      <Grid item xs={12} md={6} ref={addToRefs}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            opacity: visibleSections.has(sectionsRefs.current[1]) ? 1 : 0,
            transform: visibleSections.has(sectionsRefs.current[1])
              ? "translateX(0)"
              : "translateX(100px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <img src={HomeArt} alt="Home Art" style={{ maxWidth: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;

