import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

// Importação de imagens com aliases
import deliveryImages from "/assets/images/delivery";
import pokeImages from "/assets/images/poke";
import managerImages from "/assets/images/manager";

const projectsData = [
  {
    title: "Lenx Delivery",
    images: deliveryImages,
    description:
      "Projeto demonstrativo onde você consegue visualizar um cardápio, escolher o local de entrega e realizar o pedido.",
    technologies: "Tecnologias: React, Javascript, HTML, CSS, Material-UI, Node, MongoDB, MapBox"
  },
  {
    title: "PokeAPI",
    images: pokeImages,
    description:
      "Neste site podemos visualizar todos os detalhes dos pokémon existentes consumindo a PokeAPI.",
    technologies: "Tecnologias: Next, React, Javascript, HTML, CSS, Material-UI"
  },
  {
    title: "Gerenciamento de Negócios",
    images: managerImages,
    description:
      "Página desenvolvida para oferecer serviços de gerenciamento de negócios.",
    technologies: "Tecnologias: React, Vite, Javascript, HTML, CSS, Material-UI"
  }
];

const Projects = () => {
  return (
    <Box alignContent="center" textAlign="center" mt={20}>
      <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
        Projetos
      </Typography>
      <Typography variant="h4" fontSize={24} fontWeight={700} color="#445964">
        Estes são alguns dos trabalhos e projetos que já realizei
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          {projectsData.map((project, index) => (
            <CustomCard
              key={index}
              title={project.title}
              images={project.images}
              description={<Typography>{project.description}</Typography>}
              technologies={<Typography>{project.technologies}</Typography>}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
