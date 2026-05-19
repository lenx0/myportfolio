import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 640, md: 800, lg: 1200, xl: 1536 },
  },
  palette: {
    mode: 'dark',
    primary: { main: '#a855f7', light: '#c084fc', dark: '#7e22ce' },
    secondary: { main: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
    background: { default: '#0a0a0f', paper: '#12121a' },
    text: { primary: '#f5f5f7', secondary: '#a8a8b3' },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, fontWeight: 600 },
      },
    },
  },
});

export default theme;
