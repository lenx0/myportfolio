import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1300,
        lg: 1400,
        xl: 1536
      },
    },
  });

  export default theme