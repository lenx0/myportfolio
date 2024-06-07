import { Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 62,
    fontWeight: 700,
    color: "#445964",
    flexShrink: 1,
    maxWidth: "50vw", // Define um tamanho máximo para permitir a quebra de linha
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      wrap="nowrap" // Permite que o conteúdo quebre linha
    >
      <Grid item justifyContent="center">
        <Typography variant="body2" sx={titleStyle}>
          Desenvolvedor Front-End
        </Typography>
        <Button
          variant="contained"
          fontWeight={700}
          sx={{
            backgroundColor: "#263138",
          }}
        >
          Saiba mais sobre mim
        </Button>
      </Grid>
      <Grid item>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
