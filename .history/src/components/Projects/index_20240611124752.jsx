import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomCard from "./card";
import DeliveryImage1 from "/assets/images/delivery1.png";
import DeliveryImage2 from "/assets/images/delivery2.png";
import DeliveryImage3 from "/assets/images/delivery3.png";
import PokeImage1 from "/assets/images/poke1.png";
import PokeImage2 from "/assets/images/poke2.png";
import PokeImage3 from "/assets/images/poke3.png";
import PokeImage4 from "/assets/images/poke4.png";
import PokeImage5 from "/assets/images/poke5.png";

const Projects = () => {
  return (
    <>
      <Box alignContent="center" textAlign="center" mt={20}>
        <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
          Projetos
        </Typography>
        <Typography variant="h4" fontSize={24} fontWeight={700} color="#445964">
          Estes são alguns dos trabalhos e projetos que já realizei
        </Typography>
      </Box>

      <Stack backgroundColor="blue" justifyItems="center">
        <CustomCard
          images={[DeliveryImage1, DeliveryImage2, DeliveryImage3]}
          title={
            <Typography
              variant="h4"
              fontSize={24}
              fontWeight={700}
              color="#445964"
            >
              Lenx Delivery
            </Typography>
          }
          description={
            <Typography>
              Projeto demonstrativo onde você consegue visualizar um cardápio,
              escolher o local de entrega e realizar o pedido.
            </Typography>
          }
          technologies={
            <Typography>
              Tecnologias: React, Javascript, HTML, CSS, Material-UI, Node,
              MongoDB, MapBox
            </Typography>
          }
        />
        <CustomCard
          images={[PokeImage1, PokeImage2, PokeImage3, PokeImage4, PokeImage5]}
          title={
            <Typography
              variant="h4"
              fontSize={24}
              fontWeight={700}
              color="#445964"
            >
              Pokemon Wiki
            </Typography>
          }
          description={
            <Typography>
              Neste site podemos visualizar todos os detalhes dos pokémon
              existentes consumindo a PokeAPI.
            </Typography>
          }
          technologies={
            <Typography>
              Tecnologias: Next, React, Javascript, HTML, CSS, Material-UI
            </Typography>
          }
        />
      </Stack>
    </>
  );
};

export default Projects;
