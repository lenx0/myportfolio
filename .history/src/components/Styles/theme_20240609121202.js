import { createTheme } from '@mui/material'

const themeColors = createTheme({
  primary: {
    main: '#445964'
  },
  secondary: {
    light: '#CFF8EB',
    main: '#5ED6B0',
    dark: '#265949'
  }
})

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, 
        md: 800, 
        lg: 1200,   
        xl: 1536,     
      },
    },
    typography: {
      h1: {
        fontSize: 34,
        fontWeight: 700
      },
      h2: {
        fontSize: 24,
        fontWeight: 700
      },
      h3: {
        fontSize: 20,
        fontWeight: 600
      },
      h4: {
        fontSize: 18,
        fontWeight: 600
      },
      h5: {
        fontSize: 16,
        fontWeight: 600
      },
      h6: {
        fontSize: 14,
        fontWeight: 600
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 600
      },
      subtitle2: {
        fontSize: 12,
        fontWeight: 400
      },
      body1: {
        fontSize: 16,
        fontWeight: 400
      },
      body2: {
        fontSize: 14,
        fontWeight: 400
      },
      button: {
        fontSize: 14,
        fontWeight: 600
      },
      caption: {
        fontSize: 10,
        fontWeight: 400
      },
      caption2: {
        fontSize: 8,
        fontWeight: 400
      },
      caption3: {
        fontSize: 12,
        fontWeight: 500
      },
      overline: {
        fontSize: 12,
        fontWeight: 600
      }
  
    },
  });

export default theme
