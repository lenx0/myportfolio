import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Front-end júnior",
      company: "AG.labs",
      date: "07.2022 - 04-2024",
      titleDescription: "Na AGlabs atuei no Front-end desenvolvendo um poderoso sistema de vendas com integração ao ERP da TOTSV Virtual Age.",
      resume: `Atuei em um projeto desenvolvendo o front-end para um ERP desde a fase inicial até o lançamento sendo este um sistema de vendas de produtos fitness utilizado pelos 
representantes e clientes da empresa Alto Giro. 
O projeto foi desenvolvimento pensando na simplicidade e velocidade para realizar 
vendas. 
Na Black Friday de 2023 a empresa conseguiu transacionar mais de 15 mil pedidos, 
alcançando um valor surpreendente de mais de 13 milhões. 
Possuo facilidade na resolução de problemas, boa comunicação, sei liderar quando 
necessário, me adapto bem a diferentes tecnologias, e o mais importante, tenho 
atitude positiva `,
    },
    {
      title: "Desenvolvedor júnior",
      company: "Alto Giro",
      date: "01.2022 - 07-2022",
      titleDescription:
        "Na Alto Giro, empresa dona da AG.labs, pude atuar tanto no Back-end desenvolvendo microsserviços e no Front-end desenvolvendo interfaces e integrando-as com o Back-end",
      resume:
        "Atuei desenvolvendo ferramentas para facilitar alguns processos dentro da empresa",
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
              sx={{
                p: 3,
                minHeight: "20vh",
                backgroundColor: "#263138",
                color: "white",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                {experience.title}
              </Typography>
              <Typography variant="h6">
                {`${experience.company} - ${experience.date}`}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                {experience.titleDescription}
              </Typography>
              <Typography sx={{ mt: 1 }}>{experience.resume}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5 }}>
        <img src="/assets/icons/Quote.png" />
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
