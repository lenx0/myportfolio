import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Square from "./Square";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const About = () => {
  const [isPortuguese, setIsPortuguese] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = () => {
    setIsPortuguese(!isPortuguese);
  };

  return (
    <Box id="about-section" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={6} alignItems="center" direction={isTablet ? "column" : "row"}>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Square />
          <Typography
            fontSize={isMobile ? 20 : 26}
            fontWeight={700}
            color="#263138"
            textAlign="center"
          >
            Thiago de Freitas Beraldo
          </Typography>
          <Button
            onClick={handleClick}
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#263138",
              color: "#263138",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              px: 2.5,
              transition: "all 0.2s ease",
              '&:hover': {
                backgroundColor: "#263138",
                color: "#ffffff",
                borderColor: "#263138",
              },
            }}
          >
            {isPortuguese ? "🌐 English" : "🌐 Português"}
          </Button>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight={800}
            color="#263138"
            mb={1}
          >
            Sobre mim
          </Typography>
          <Box
            width={60}
            height={4}
            sx={{ background: "linear-gradient(90deg, #5d176b, #1484e0)" }}
            borderRadius={2}
            mb={3}
          />
          <Typography
            variant="body1"
            color="#445964"
            sx={{
              lineHeight: 1.9,
              fontSize: { xs: 15, md: 16 },
              letterSpacing: '0.02em',
            }}
          >
            {isPortuguese ? (
              <>
                Engenheiro de Software com experiência no desenvolvimento de aplicações escaláveis e de alta performance.
                <br /><br />
                Experiência prática com serviços da AWS, incluindo deploy, monitoramento e escalabilidade de aplicações em nuvem, além de atuação com containers utilizando Docker para padronização e otimização de ambientes. Conhecimento em bancos de dados relacionais e não relacionais.
                <br /><br />
                Atuo na construção de sistemas robustos, desde a concepção da arquitetura até a entrega em produção, garantindo qualidade, segurança e eficiência. Possuo experiência em análise de desempenho, identificação de gargalos e implementação de melhorias contínuas para garantir sistemas rápidos e estáveis, mesmo sob alta carga.
              </>
            ) : (
              <>
                Software Engineer with experience in developing scalable and high-performance applications.
                <br /><br />
                Hands-on experience with AWS services, including deployment, monitoring, and cloud application scalability, as well as working with Docker containers for environment standardization and optimization. Proficient in both relational and non-relational databases.
                <br /><br />
                I work on building robust systems, from architecture design to production delivery, ensuring quality, security, and efficiency. I have experience in performance analysis, bottleneck identification, and implementing continuous improvements to keep systems fast and stable even under high load.
              </>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
