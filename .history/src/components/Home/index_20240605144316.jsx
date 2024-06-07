import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 55,
    fontWeight: 700,
    color: "#445964",
    flexShrink: 1,
    maxWidth: '50vw'  // Define um tamanho máximo para permitir a quebra de linha
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"  // Permite que o conteúdo quebre linha
    >
      <Grid item>
        <Typography textAlign="bottom" variant="body2" sx={titleStyle}>
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
