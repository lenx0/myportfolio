import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      backgroundColor="red"
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
      <Grid item>
        <img src={HomeArt} />
      </Grid>
    </Grid>
  );
};

export default Home;
