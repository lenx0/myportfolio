import { Button, Grid, Typography, Box } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 62,
    fontWeight: 700,
    color: "#445964",
    mb: 5,
    maxWidth: "50vw",
  };

  const buttonStyle = {
    fontSize: 18,
    fontWeight: 700,
    backgroundColor: "#263138",
    width: 310,
    height: 65,
    borderRadius: 20,
    mb: 5,
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    mt: "auto",
    gap: 2,
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={2}
      wrap="nowrap"
      sx={{ height: "100vh", backgroundColor: "red" }} // Garante que o container ocupe toda a altura da viewport
    >
      <Grid 
        item 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between",
          height: "100%" // Garante que o item ocupe toda a altura disponível
        }}
      >
        <Box>
          <Typography variant="body2" sx={titleStyle}>
            Desenvolvedor Front-End
          </Typography>
          <Button variant="contained" sx={buttonStyle}>
            Saiba mais sobre mim
          </Button>
        </Box>
        <Box sx={footerStyle}>
          <img src={Github} alt="Github" />
          <img src={Linkedin} alt="LinkedIn" />
        </Box>
      </Grid>
      <Grid item>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
