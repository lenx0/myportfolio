import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
    >
      <Grid item>
        <Typography
          variant="body2"
          fontSize={72}
          fontWeight={700}
          color="#445964"
        >
          Desenvolvedor Front-End
        </Typography>
      </Grid>
      <Grid
        item
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        alignContent="center"
      >
        <img src={HomeArt} />
      </Grid>
    </Grid>
  );
};

export default Home;
