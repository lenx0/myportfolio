import { Box, Button, Chip, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HomeArt from "/assets/images/Art1.svg";
import scrollToSection from "../Utility/scroll";
import { useTheme } from "@emotion/react";

const techStack = ["JavaScript", "React", "Node.js", "AWS", "Docker", "PostgreSQL"];

const highlights = [
  "⚡ APIs escaláveis e de alta performance",
  "🎨 Interfaces modernas com React e TypeScript",
  "☁️ Infraestrutura em nuvem com AWS e Docker",
  "🗄️ Domínio em bancos relacionais e NoSQL",
  "🐳 Pipelines de CI/CD e boas práticas DevOps",
  "🤝 Foco em entrega de valor real ao negócio",
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      id="home-section"
      container
      direction={isTablet ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      textAlign={isTablet ? "center" : "left"}
      sx={{
        minHeight: "calc(100vh - 70px)",
        py: { xs: 6, md: 4 },
        gap: { xs: 4, lg: 0 },
      }}
    >
      <Grid item xs={12} lg={6}>
        <Typography
          sx={{
            fontSize: { xs: 36, sm: 46, md: 56, lg: 62 },
            fontWeight: 800,
            color: "#263138",
            lineHeight: 1.1,
            mb: 2,
            letterSpacing: "-0.02em",
          }}
        >
          ENGENHEIRO DE{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #5d176b, #1484e0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SOFTWARE
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 17 },
            color: "#445964",
            mb: 4,
            maxWidth: 480,
            mx: isTablet ? "auto" : 0,
            lineHeight: 1.7,
          }}
        >
          Construindo sistemas escaláveis, de alta performance e entregando valor do código à produção.
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent={isTablet ? "center" : "flex-start"}
          mb={3}
        >
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontWeight: 600,
                backgroundColor: "rgba(38, 49, 56, 0.07)",
                color: "#263138",
                border: "1px solid rgba(38, 49, 56, 0.18)",
                transition: "all 0.2s ease",
                '&:hover': {
                  backgroundColor: "rgba(93, 23, 107, 0.1)",
                  borderColor: "#5d176b",
                  color: "#5d176b",
                },
              }}
            />
          ))}
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 2,
            py: 1,
            mb: 3,
            borderRadius: 99,
            background: "linear-gradient(135deg, rgba(93,23,107,0.08), rgba(20,132,224,0.08))",
            border: "1px solid rgba(93,23,107,0.25)",
            maxWidth: { xs: "100%", md: 460 },
            mx: isTablet ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              flexShrink: 0,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5d176b, #1484e0)",
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)", opacity: 1 },
                "50%": { transform: "scale(1.5)", opacity: 0.5 },
              },
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <Box sx={{ flex: 1, overflow: "hidden", height: "28px" }}>
            <Swiper
              direction="vertical"
              modules={[Autoplay]}
              autoplay={{ delay: 2200, disableOnInteraction: false }}
              loop
              speed={500}
              style={{ height: "28px" }}
            >
              {highlights.map((text, i) => (
                <SwiperSlide key={i} style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 13,
                      background: "linear-gradient(135deg, #5d176b, #1484e0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {text}
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={() => scrollToSection('about-section')}
          size="large"
          sx={{
            fontSize: { xs: 14, md: 15 },
            backgroundColor: "#263138",
            fontWeight: 700,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            transition: "all 0.3s ease",
            '&:hover': {
              backgroundColor: "#5d176b",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(93, 23, 107, 0.3)",
            },
          }}
        >
          Saiba mais sobre mim
        </Button>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src={HomeArt}
            alt="Home Art"
            style={{ maxWidth: isTablet ? "min(420px, 90vw)" : "100%", width: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
