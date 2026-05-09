import { useRef } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";

const categoryColors = {
  Linguagens:      { bg: "rgba(20, 132, 224, 0.07)",  border: "#1484e0", text: "#0d6ebc" },
  Frameworks:      { bg: "rgba(93, 23, 107, 0.07)",   border: "#5d176b", text: "#5d176b" },
  BancoDeDados:    { bg: "rgba(38, 49, 56, 0.07)",    border: "#445964", text: "#263138" },
  Estilização:     { bg: "rgba(20, 190, 140, 0.07)",  border: "#14be8c", text: "#0a8c64" },
  DevOPs:          { bg: "rgba(224, 142, 20, 0.07)",  border: "#e08e14", text: "#b36900" },
  Profissionalismo:{ bg: "rgba(93, 23, 107, 0.05)",   border: "#5d176b", text: "#5d176b" },
};

const categoryLabels = {
  BancoDeDados: "Banco de Dados",
  DevOPs: "DevOps",
  Profissionalismo: "Soft Skills",
};

const skillsData = {
  Linguagens: ["JavaScript", "Java", "Python", "SQL"],
  Frameworks: ["React", "Next.js", "Nest.js", "Express"],
  BancoDeDados: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL Server"],
  Estilização: ["CSS", "Material-UI", "Styled-Components", "Tailwind"],
  DevOPs: ["AWS", "Docker", "Git", "CI/CD"],
  Profissionalismo: ["Comunicação", "Trabalho em equipe", "Resolução de problemas", "Gerenciamento de tempo"],
};

const HardSkills = () => {
  const swiperRef = useRef(null);

  return (
    <Box id="hardskills-section" sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h4" align="center" fontWeight={800} color="#263138" gutterBottom>
        Habilidades
      </Typography>
      <Box
        width={60}
        height={4}
        sx={{ background: "linear-gradient(90deg, #5d176b, #1484e0)", mx: "auto" }}
        borderRadius={2}
        mb={5}
      />

      <Box
        sx={{
          overflow: "hidden",
          "& .swiper-wrapper": { alignItems: "stretch" },
          "& .swiper-slide": { height: "auto" },
        }}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop
          slidesPerView="auto"
          spaceBetween={24}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {Object.keys(skillsData).map((category) => {
            const colors = categoryColors[category];
            const label = categoryLabels[category] || category;
            return (
              <SwiperSlide key={category} style={{ width: "300px", height: "auto", display: "flex" }}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    border: `1.5px solid ${colors.border}33`,
                    backgroundColor: colors.bg,
                    p: 3,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    '&:hover': {
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 24px ${colors.border}22`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.4,
                      mb: 2,
                      borderRadius: 1.5,
                      backgroundColor: `${colors.border}18`,
                      border: `1px solid ${colors.border}44`,
                    }}
                  >
                    <Typography
                      fontWeight={700}
                      fontSize={12}
                      color={colors.text}
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      {label}
                    </Typography>
                  </Box>

                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {skillsData[category].map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: 13,
                          backgroundColor: "#ffffff",
                          color: "#263138",
                          border: `1px solid ${colors.border}33`,
                          transition: "all 0.2s ease",
                          '&:hover': {
                            backgroundColor: `${colors.border}11`,
                            borderColor: colors.border,
                            color: colors.text,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HardSkills;
