import { Button, Grid, Typography, Box } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 62,
    fontWeight: 700,
    color: "#445964",
    flexShrink: 1,
    mb: 5,
    maxWidth: "50vw",
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexGrow: 1,
    marginTop: 'auto',
    padding: '10px 0'
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={2}
      wrap="nowrap"
      backgroundColor="red"
      sx={{ height: '100vh' }} // Para garantir que o container ocupe toda a altura da viewport
    >
      <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="body2" sx={titleStyle}>
            Desenvolvedor Front-End
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: 18,
              fontWeight: 700,
              backgroundColor: "#263138",
              width: 310,
              height: 65,
              borderRadius: 20,
              mb: 5,
            }}
          >
            Saiba mais sobre mim
          </Button>
        </div>
        <Box sx={footerStyle}>
          <img src={Github} alt="Github" style={{ marginRight: 10 }} />
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
