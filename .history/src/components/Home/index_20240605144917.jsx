import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <>
      <Grid
        container
        backgroundColor="blue"
        direction="row"
        width="100%"
        height="700px"
      >
        <Grid item xs={6} backgroundColor="red">
          <Typography>Titulo</Typography>
        </Grid>
        <Grid item xs={6} backgroundColor="yellow">
          <Typography>Imagem</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
