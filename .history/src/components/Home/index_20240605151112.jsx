import { Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  return (
    <>
      <Grid container direction="row" mt={10}>
        <Grid item xs={6} justifyItems="center">
          <Typography fontSize={62} fontWeight={700} color="#445964">
            Desenvolvedor Front-End
          </Typography>
          <Grid item backgroundColor="yellow" justifyItems="center" justifyContent="center">
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
        </Grid>
        <Grid item xs={6} alignContent="center">
          <img src={HomeArt} width="705px" height="697" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
