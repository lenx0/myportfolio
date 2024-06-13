import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Front-end júnior",
      company: "AG.labs",
      date: "07.2022 - 04-2024",
      titleDescription:
        "Na AGlabs atuei no Front-end desenvolvendo um poderoso sistema de vendas com integração ao ERP da TOTSV Virtual Age.",
        resume: "Integrei uma equipe desenvolvendo novas features e corrigindo eventuais problemas, bem como realizando testes e realizando deploy na AWS",
    },
    {
      title: "Desenvolvedor júnior",
      company: "Alto Giro",
      date: "01.2022 - 07-2022",
      description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <Box sx={{ mt: 10, textAlign: "center", px: 2 }}>
      <Typography variant="h4" fontWeight={700} color="#445964">
        Experiência
        <Typography component="span" fontWeight={900} color="black">
          Profissional
        </Typography>
      </Typography>
      <Typography sx={{ mt: 2, color: "#445964", fontSize: 16 }}>
        Minha jornada está apenas começando, sempre aprendendo
      </Typography>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, backgroundColor: "#263138", color: "white" }}
            >
              <Typography variant="h6" fontWeight={700}>
                {experience.title}
              </Typography>
              <Typography variant="h6">
              {`${experience.company} - ${experience.date}`}
              </Typography>
              <Typography sx={{ mt: 1 }}>{experience.titleDescription}</Typography>
              <Typography sx={{ mt: 1 }}>{experience.resume}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: 64, color: "#445964" }}>
          &#8220;&#8221;
        </Typography>
        <Typography
          sx={{ mt: 2, fontWeight: 700, fontSize: 18, color: "#445964" }}
        >
          “A mente que se abre a uma nova ideia jamais voltará ao seu tamanho
          original”
        </Typography>
        <Typography
          sx={{ mt: 2, fontSize: 18, fontWeight: 700, color: "#445964" }}
        >
          ~ Albert Einstein
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
