import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={{ xl: 2, lg: 0 }}
      wrap={{ xl: "nowrap" }}
    >
      <Grid item lg={12}>
        <Typography
          variant="body2"
          sx={{
            fontSize: 62,
            fontWeight: 700,
            color: "#445964",
            flexShrink: 1,
            mb: 5,
            maxWidth: "50vw",
          }}
        >
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
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "auto",
          gap: "10px",
        }}
      >
        <Box>
          <img src={Github} />
        </Box>
        <Box>
          <img src={Linkedin} />
        </Box>
      </Box>
      <Grid item lg={1}>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
