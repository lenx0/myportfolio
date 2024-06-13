import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CustomCard from "./card"; // Certifique-se de ajustar o caminho conforme necessário
import projectsData from "./projectsData"; // Certifique-se de ajustar o caminho conforme necessário

const Home = () => {
  return (
    <Grid container mt={20} direction="row" backgroundColor="yellow" spacing={2}>
      <Grid 
        container 
        item 
        xs={12} 
        direction="column" 
        alignItems="center" 
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Typography
            variant="h4"
            fontSize={64}
            fontWeight={700}
            color="#445964"
            align="center"
          >
            Projetos
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
            variant="h4" 
            fontSize={24} 
            fontWeight={700} 
            color="#445964" 
            align="center"
          >
            Estes são alguns dos trabalhos e projetos que já realizei
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4} key={index}>
            <CustomCard
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

export default Home;
