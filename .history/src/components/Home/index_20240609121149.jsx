import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <Grid container direction="row" alignItems="center" wrap="nowrap">
      <Grid item>
        <Typography
          variant="body2"
          sx={{
            fontSize: "3rem",
            fontWeight: 700,
            flexShrink: 1,
            mb: 5,
            maxWidth: "50vw",
          }}
        >
          Desenvolvedor Front-End
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
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
        </Box>
      </Grid>
      <Grid item>
        <img src={HomeArt} alt="Home Art" />
      </Grid>
    </Grid>
  );
};

export default Home;
