import { Box, Typography, styled } from "@mui/material";

const About = () => {
  const HexagonContainer = styled(Box)(({ theme }) => ({
    width: "200px",
    height: "230.94px",
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
    <>
    <HexagonContainer>
      <img src="/assets/images/profile.jpg" alt="Hexagon content" />
    </HexagonContainer>
    <Typography variant="h4">Thiago de Freitas Beraldo</Typography>
    </>
  );
};

export default About;
