import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <>
      <Grid container backgroundColor="blue">
        <Grid item backgroundColor="red">
          <Typography>Titulo</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>Imagem</Typography>
      </Grid>
    </>
  );
};

export default Home;
