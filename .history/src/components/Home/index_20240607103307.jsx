import { Box, Button, Grid, Typography } from "@mui/material";
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

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={2}
      wrap="nowrap"
      backgroundColor="red"
    >
      <Grid item>
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
      </Grid>
      <Box
        sx={{
          justifyContent: "center",
          marginTop: "auto",
          padding: "10px 0",
          backgroundColor: "blue"
        }}
      >
        <Box>
        <img src={Github} />
        </Box>
        
        <img src={Linkedin} />
      </Box>
      <Grid item>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
