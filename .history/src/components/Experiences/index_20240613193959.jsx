import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      title: "Cargo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Cargo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Cargo",
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
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: "#263138", color: "white" }}>
              <Typography variant="h6" fontWeight={700}>
                {experience.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>{experience.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: 64, color: "#445964" }}>&#8220;&#8221;</Typography>
        <Typography sx={{ mt: 2, fontSize: 18, color: "#445964" }}>
          “A mente que se abre a uma nova ideia <strong>jamais voltará ao seu tamanho original</strong>”
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 18, fontWeight: 700, color: "#445964" }}>
          ~ Albert Einstein
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
