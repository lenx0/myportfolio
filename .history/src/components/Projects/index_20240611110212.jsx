import { Grid, Typography } from "@mui/material";
import CustomCard from "./card";
import DeliveryImage from "/assets/images/delivery1.png";

const Projects = () => {
  return (
    <>
      <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
        Projetos
      </Typography>
      <Typography variant="h4" fontSize={24} fontWeight={700} color="#445964">
        Estes são alguns dos trabalhos e projetos que já realizei
      </Typography>
      <Grid container gap={5} backgroundColor="red" alignContent="center">
        <Grid item>
          <CustomCard
            image={DeliveryImage}
            title="Lenx Delivery"
            description="Entrega de comidas"
          />
        </Grid>
        <Grid item>
          <CustomCard
            image={DeliveryImage}
            title="Lenx Delivery"
            description="Entrega de comidas"
          />
        </Grid>
        <Grid item>
          <CustomCard
            image={DeliveryImage}
            title="Lenx Delivery"
            description="Entrega de comidas"
          />
        </Grid>
        <Grid item>
          <CustomCard
            image={DeliveryImage}
            title="Lenx Delivery"
            description="Entrega de comidas"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
