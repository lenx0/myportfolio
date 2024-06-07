import { Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";

const Home = () => {
  const titleStyle = {
    fontSize: 55,
    fontWeight: 700,
    color: "#445964",
    flexShrink: 1,
    maxWidth: "50vw",
  };

  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item>
        <Typography variant="body2" sx={titleStyle}>
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
