import { Box, Typography, styled } from "@mui/material";

const About = () => {
  const HexagonContainer = styled(Box)(({ theme }) => ({
    // width: "100px",
    // height: "115.47px",
    width: "200px",
    height: "230.94px",
    // width: "300px",
    // height: "346.41px",
    position: "relative",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      clipPath: "inherit",
    },
  }));

  return (
    <Box mt={10}>
      <HexagonContainer>
        <img src="/assets/images/profile.jpg" alt="Hexagon content" />
      </HexagonContainer>
      <Typography variant="h4" fontSize={64} fontWeight={700} color="#445964">
        Thiago de Freitas Beraldo
      </Typography>
    </Box>
  );
};

export default About;
