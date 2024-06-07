import { Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <>
      <Grid
        container
        backgroundColor="blue"
        direction="row"
        width="100%"
        height="700px"
        mt={10}
      >
        <Grid item xs={6} backgroundColor="red" gap={10}>
          <Typography fontSize={62} fontWeight={700} color="#445964">
            Desenvolvedor Front-End
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#263138",
              fontWeight: 700,
            }}
          >
            Saiba mais sobre mim
          </Button>
        </Grid>
        <Grid item xs={6} backgroundColor="yellow" alignContent="center">
          <img src={HomeArt} width="505px" height="497" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
