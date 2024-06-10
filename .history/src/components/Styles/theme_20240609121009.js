import { createTheme } from '@mui/material'

const themeColors = createTheme({
  primary: {
    light: '#FFDED8',
    main: '#FF5B3B',
    dark: '#9D2D18'
  },
  secondary: {
    light: '#CFF8EB',
    main: '#5ED6B0',
    dark: '#265949'
  },
  link: {
    light: '#E6F3FA',
    main: '#3D9CF7',
    dark: '#0054A5'
  },
  error: {
    light: '#FCE4E2',
    main: '#EB574C',
    dark: '#A8313A'
  },
  warning: {
    light: '#FDF5E1',
    main: '#F6C344',
    dark: '#AF832C'
  },
  success: {
    light: '#EAF8E2',
    main: '#17C964',
    dark: '#00784C'
  },
  info: {
    light: '#E6E0EF',
    main: '#673AB7',
    dark: '#220089'
  },
  step: {
    light: '#FF5B3B',
    main: '#FF5B3B',
    dark: '#FF5B3B'
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
