import { Box, styled } from "@mui/material";

const HexagonContainer = styled(Box)(({ theme }) => ({
    // width: "100px",
    // height: "115.47px",
    width: "400px",
    height: "430.94px",
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

  export default HexagonContainer