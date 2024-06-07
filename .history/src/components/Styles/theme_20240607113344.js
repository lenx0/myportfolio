import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 600,
        lg: 1023,
        xl: 1375
      },
    },
  });

  export default theme