import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./card";
import DeliveryImage1 from "/assets/images/delivery1.png";
import DeliveryImage2 from "/assets/images/delivery2.png";
import DeliveryImage3 from "/assets/images/delivery3.png";

const Projects = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Projetos
        </Typography>
        <Typography variant="h4" fontSize={24} fontWeight={700} color="#445964">
          Estes são alguns dos trabalhos e projetos que já realizei
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} alignItems="center" alignContent="center" justifyContent="center">
          <CustomCard
            images={[DeliveryImage1, DeliveryImage2, DeliveryImage3]}
            title="Lenx Delivery"
            description="Entrega de comidas"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
