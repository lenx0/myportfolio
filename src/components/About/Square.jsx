import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";

const Square = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (

    <Box
      sx={{
        width: !isMobile ? "400px" : "250px",
        height: !isMobile ? "400px" : "250px",
        position: "relative",
        border: "5px solid #263138",
        overflow: "hidden",
        borderRadius: "8px",

        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      }}
    >
      <img src="/assets/images/profile.jpg" alt="Hexagon content" />
    </Box>
  )
}

export default Square;
