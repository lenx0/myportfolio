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
        <Grid item xs={6} backgroundColor="red">
          <Typography fontSize={62} fontWeight={700} color="#445964">
            Desenvolvedor Front-End
          </Typography>
          <Button variant="contained" 
          sx={{
            backgroundColor: "#445964",
            color: "white",
            fontWeight: 700,
            fontSize: 18,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            width: 200,
            height: 50,
            borderRadius: 10,
            "&:hover": {
              backgroundColor: "#445964",
              color: "white",
              fontWeight: 700,
              fontSize: 18,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 20,
              width: 200,
              height: 50,
              borderRadius: 10,
            },
          }}>
            saiba mais sobre mim
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
