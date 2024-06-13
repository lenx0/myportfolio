import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard"; // Ajuste o caminho conforme necessário

const projectsData = [
  {
    title: "Projeto 1",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
    description: "Descrição do Projeto 1",
  },
  {
    title: "Projeto 2",
    images: ["/path/to/image3.jpg", "/path/to/image4.jpg"],
    description: "Descrição do Projeto 2",
  },
  // Adicione mais projetos conforme necessário
];

const CardGallery = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {projectsData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <CustomCard
            title={project.title}
            images={project.images}
            description={project.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGallery;
