import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./card";

const projectsData = [
  {
    title: "Lenx Delivery",
    images: generateImageArray("delivery", 3),
    access: "https://front-lenxdelivery.vercel.app",
    description:
      "Projeto demonstrativo onde você consegue visualizar um cardápio, escolher o local de entrega e realizar o pedido.",
    technologies:
      "Tecnologias: React, Javascript, HTML, CSS, Material-UI, Node, MongoDB, MapBox",
  },
  {
    title: "PokeAPI",
    images: generateImageArray("poke", 5),
    access: "https://poke-wiki-front.vercel.app",
    description:
      "Neste site podemos visualizar todos os detalhes dos pokémon existentes consumindo a PokeAPI.",
    technologies:
      "Tecnologias: Next, React, Javascript, HTML, CSS, Material-UI",
  },
  {
    title: "Gerenciamento de Negócios",
    images: generateImageArray("manager", 5),
    access: "https://business-manager-liard.vercel.app",
    description:
      "Página desenvolvida para oferecer serviços de gerenciamento de negócios.",
    technologies:
      "Tecnologias: React, Vite, Javascript, HTML, CSS, Material-UI",
  },
  {
    title: "Pokedex",
    images: generateImageArray("pokedex", 1),
    access: "https://pokedex-mu-ten.vercel.app",
    description: "Pokedex com sprites animadas",
    technologies: "Tecnologias: Javascript, HTML, CSS",
  },
];

function generateImageArray(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/assets/images/${prefix}${i}.png`);
  }
  return images;
}

const Projects = () => {
  return (
    <Grid container mt={20} direction="row" backgroundColor="yellow">
      <Typography variant="h4" textAlign="end" fontSize={64} fontWeight={700} color="#445964">
        Projetos
      </Typography>
      <Typography variant="h4" fontSize={24} fontWeight={700} color="#445964">
        Estes são alguns dos trabalhos e projetos que já realizei
      </Typography>
      <Grid container>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <CustomCard
              key={index}
              title={project.title}
              images={project.images}
              access={project.access}
              description={<Typography>{project.description}</Typography>}
              technologies={<Typography>{project.technologies}</Typography>}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
