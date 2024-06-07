import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 72,
    fontWeight: 700,
    color: "#445964",
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}  // Adiciona espaçamento entre os itens
    >
      <Grid item>
        <Typography variant="body2" sx={titleStyle}>
          Desenvolvedor Front-End
        </Typography>
      </Grid>
      <Grid item>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
