import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./card";

const generateImageArray = (prefix, count) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(new URL(`/src/assets/images/${prefix}${i}.png`, import.meta.url).href);
  }
  return images;
};

const projectsData = [
  {
    title: "Lenx Delivery",
    images: generateImageArray("delivery", 3), // 3 imagens de delivery
    description: "Projeto demonstrativo onde você consegue visualizar um cardápio, escolher o local de entrega e realizar o pedido.",
    technologies: ["React", "Javascript", "HTML", "CSS", "Material-UI", "Node", "MongoDB", "MapBox"]
  },
  {
    title: "PokeAPI",
    images: generateImageArray("poke", 5), // 5 imagens de poke
    description: "Neste site podemos visualizar todos os detalhes dos pokémon existentes consumindo a PokeAPI.",
    technologies: ["Next", "React", "Javascript", "HTML", "CSS", "Material-UI"]
  },
  {
    title: "Gerenciamento de Negócios",
    images: generateImageArray("manager", 5), // 5 imagens de manager
    description: "Página desenvolvida para oferecer serviços de gerenciamento de negócios.",
    technologies: ["React", "Vite", "Javascript", "HTML", "CSS", "Material-UI"]
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
              title={
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
              }
              images={project.images}
              description={
                <Typography component="div">
                  {project.description}
                </Typography>
              }
              technologies={project.technologies}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
