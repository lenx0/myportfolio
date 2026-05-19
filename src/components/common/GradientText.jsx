import React from "react";
import { Typography } from "@mui/material";

const GradientText = ({ children, sx = {}, component = "span", ...rest }) => (
  <Typography
    component={component}
    sx={{
      background: "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #3b82f6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline",
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Typography>
);

export default GradientText;
