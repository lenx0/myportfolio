import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Square from "./Square";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const About = () => {
  const [isPortuguese, setIsPortuguese] = useState(true);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClick = () => {
    setIsPortuguese(!isPortuguese);
  };

  return (
    <Stack id="about-section" alignItems="center" spacing={5} mt={5}>
      <Box backgroundColor="blue">
        <Square>
          <img src="/assets/images/profile.jpg" alt="Hexagon content" />
        </Square>
      </Box>
      <Stack>
        <Typography
          fontSize={isMobile ? 25 : 48}
          fontWeight={700}
          color="#445964"
        >
          Thiago de Freitas Beraldo
        </Typography>
      </Stack>
      <Stack maxWidth="90%">
        <Typography
          variant="h6"
          color="#445964"
          textAlign="justify"
          sx={{
            letterSpacing: '0.05em',
            wordSpacing: '0.1em',
            lineHeight: 1.6,
          }}
        >
          {isPortuguese ? (
            <p>
              Engenheiro de Software com experiência no desenvolvimento de aplicações escaláveis e de alta performance.
              <br />
              <br />
              Experiência prática com serviços da AWS, incluindo deploy, monitoramento e escalabilidade de aplicações em nuvem, além de atuação com containers utilizando Docker para padronização e otimização de ambientes. Conhecimento em bancos de dados relacionais e não relacionais.
              <br />
              <br />
              Atuo na construção de sistemas robustos, desde a concepção da arquitetura até a entrega em produção, garantindo qualidade, segurança e eficiência. Possuo experiência em análise de desempenho, identificação de gargalos e implementação de melhorias contínuas para garantir sistemas rápidos e estáveis, mesmo sob alta carga.
            </p>
          ) : (
            <p>
              Software Engineer with experience in developing scalable and high-performance applications.
              <br />
              <br />
              Hands-on experience with AWS services, including deployment, monitoring, and cloud application scalability, as well as working with Docker containers for environment standardization and optimization. Proficient in both relational and non-relational databases.
              <br />
              <br />
              I work on building robust systems, from architecture design to production delivery, ensuring quality, security, and efficiency. I have experience in performance analysis, bottleneck identification, and implementing continuous improvements to keep systems fast and stable even under high load.
            </p>
          )}
        </Typography>
      </Stack>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{
          width: !isMobile ? "20%" : "80%",
          height: !isMobile ? "50px" : "45px",
          backgroundColor: "#263138",
          borderRadius: 2,
          fontWeight: "bold",
          transition: "transform 0.5s ease, color 0.3s ease",
          '&:hover': {
            backgroundColor: "#5d176b",
            color: "#ffffff",
            transform: "scale(1.1)",
          },
        }}
      >
        {isPortuguese ? "English" : "Portuguese"}
      </Button>
    </Stack>
  );
};

export default About;
