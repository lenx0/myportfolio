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
        <Grid item backgroundColor="red">
          <Typography>Titulo</Typography>
        </Grid>
      </Grid>
      <Grid item backgroundColor="yellow">
        <Typography>Imagem</Typography>
      </Grid>
    </>
  );
};

export default Home;