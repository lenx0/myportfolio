import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,

        lg: 1200,
        xl: 1375
      },
    },
  });

  export default theme