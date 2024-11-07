import { Typography, styled } from "@mui/material";

const GradientTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#445964",
  backgroundImage: "linear-gradient(90deg, #263138, #5d176b, #b4e014, #1484e0, #e08e14)",
  backgroundSize: "200%",
  backgroundClip: "text",
  textFillColor: "transparent",
  animation: "gradientFlow 10s infinite linear",
  "@keyframes gradientFlow": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

export default GradientTypography;
