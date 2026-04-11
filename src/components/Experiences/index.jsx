import { Box, Chip, Grid, Typography } from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Júnior",
      company: "Alto Giro",
      date: "Jan 2022 – Jul 2022",
      resume: `Na Alto Giro atuei desenvolvendo microsserviços para facilitar processos internos como RH e almoxarifado. Desenvolvi interfaces web com React e JavaScript, além de APIs com Node.js, Express e MongoDB.`,
    },
    {
      title: "Desenvolvedor Front-end Júnior",
      company: "AG.labs",
      date: "Jul 2022 – Abr 2024",
      resume: `Atuei em projeto que consumiu dados do ERP da TOTVS da fase inicial ao lançamento, sistema hoje utilizado pelos representantes e clientes da Alto Giro. Na Black Friday de 2023 o sistema transacionou mais de 15 mil pedidos, alcançando mais de R$13 milhões em volume.`,
    },
    {
      title: "Desenvolvedor Fullstack Pleno",
      company: "IOB",
      date: "Jan 2025 – Atual",
      resume: `Atualmente atuo nas melhorias e correções de um sistema de gestão de documentos fiscais, utilizando Javascript e Knockout no front-end, Node.js, MongoDB e PostgreSQL no back-end, e AWS para infraestrutura. O sistema é projetado para ser escalável e de alta performance, atendendo às necessidades de uma base gigantesca e crescente de contadores e empresas em todo o Brasil.`,
    },
  ];

  return (
    <Box id="experience-section" sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h4" fontWeight={800} color="#263138" textAlign="center">
        Experiência
      </Typography>
      <Typography fontWeight={700} fontSize={20} color="#5d176b" textAlign="center" mb={1}>
        Profissional
      </Typography>
      <Box
        width={60}
        height={4}
        sx={{ background: "linear-gradient(90deg, #5d176b, #1484e0)", mx: "auto" }}
        borderRadius={2}
        mb={2}
      />
      <Typography sx={{ textAlign: "center", color: "#445964", mb: 5 }}>
        Minha jornada é curta, mas de muita dedicação e resiliência
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 900, mx: "auto" }}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                backgroundColor: "#263138",
                borderRadius: 3,
                p: 3,
                height: "100%",
                color: "#ffffff",
                borderLeft: "4px solid #5d176b",
                boxShadow: "0 4px 20px rgba(38, 49, 56, 0.15)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 32px rgba(38, 49, 56, 0.25)",
                },
              }}
            >
              <Chip
                label={experience.date}
                size="small"
                sx={{ mb: 1.5, backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", fontWeight: 600, fontSize: 12 }}
              />
              <Typography variant="h6" fontWeight={700} mb={0.5}>
                {experience.title}
              </Typography>
              <Typography variant="subtitle2" mb={2} sx={{ color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {experience.company}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                {experience.resume}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 7, textAlign: "center" }}>
        <img src="/assets/icons/Quote.png" alt="aspas" />
        <Typography sx={{ mt: 2, fontWeight: 700, fontSize: { xs: 16, md: 18 }, color: "#445964", maxWidth: 560, mx: "auto" }}>
          "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original"
        </Typography>
        <Typography sx={{ mt: 1, fontSize: 16, fontWeight: 700, color: "#5d176b" }}>
          ~ Albert Einstein
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;