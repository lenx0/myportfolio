import { Box, Button, Grid, Typography } from "@mui/material";
import HomeArt from "/assets/images/Art1.svg";
import Github from "/assets/icons/Github.svg";
import Linkedin from "/assets/icons/Linkedin.svg";

const Home = () => {
  return (
    <Grid
      container
      direction={{ xs: 'column', md: 'row' }} // Column on small screens, row on medium and up
      alignItems="center"
      spacing={2}
      wrap="nowrap"
      sx={{ height: '100vh', backgroundColor: 'red' }} // Optional: background color and full height
    >
      <Grid item sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 0 } }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: 32, sm: 48, md: 62 }, // Responsive font size
            fontWeight: 700,
            color: "#445964",
            mb: 5,
            maxWidth: { xs: '90vw', md: '50vw' }, // Responsive max width
          }}
        >
          Desenvolvedor Front-End
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18 }, // Responsive font size
            fontWeight: 700,
            backgroundColor: "#263138",
            width: { xs: 250, sm: 280, md: 310 }, // Responsive width
            height: { xs: 50, sm: 60, md: 65 }, // Responsive height
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
          justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens, left on medium and up
          mt: "auto",
          gap: 2,
          mb: { xs: 2, md: 0 },
        }}
      >
        <Box>
          <img src={Github} alt="Github" style={{ width: '40px', height: '40px' }} /> {/* Optional: Set icon size */}
        </Box>
        <Box>
          <img src={Linkedin} alt="LinkedIn" style={{ width: '40px', height: '40px' }} /> {/* Optional: Set icon size */}
        </Box>
      </Box>
      <Grid item sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <img src={HomeArt} alt="Home Art" style={{ maxWidth: '100%', height: 'auto' }} /> {/* Responsive image */}
      </Grid>
    </Grid>
  );
};

export default Home;
