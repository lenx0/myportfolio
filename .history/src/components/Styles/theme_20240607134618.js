import { createTheme, useMediaQuery, useTheme } from '@mui/material'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,        // extra-small
        sm: 500,      // small
        md: 800,      // medium
        lg: 1200,     // large
        xl: 1536,     // extra-large
      },
    },
  });

export default useScreenSize
