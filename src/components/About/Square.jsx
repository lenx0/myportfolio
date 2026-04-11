import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";

const Square = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const size = isMobile ? 200 : 260;

  return (
    <Box
      sx={{
        width: size + 6,
        height: size + 6,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #5d176b, #1484e0, #263138)",
        padding: "3px",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <img src="/assets/images/profile.jpg" alt="Thiago Beraldo" />
      </Box>
    </Box>
  );
};

export default Square;
