import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid container backgroundColor="red">
      <Grid item>
        <Typography fontSize={72} fontWeight={700} color="#445964">
          Desenvolvedor Front-End
        </Typography>
        <Typography variant="body2">
            Next.js
            React
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
