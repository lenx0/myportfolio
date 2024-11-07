import { Box, styled } from "@mui/material";

const SquareContainer = styled(Box)({
  width: "400px",
  height: "400px",
  position: "relative",
  border: "5px solid #263138",
  overflow: "hidden",
  borderRadius: "8px",
  
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const SquareWithBorder = () => (
  <SquareContainer>
    <img src="/assets/images/profile.jpg" alt="Hexagon content" />
  </SquareContainer>
);

export default SquareWithBorder;
