import { createTheme } from '@mui/material/styles'
import { grey, common, } from '@mui/material/colors'

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

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial',
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
  palette: {
    mode: 'light',
    primary: {
      light: themeColors.primary.light,
      main: themeColors.primary.main,
      dark: themeColors.primary.dark
    },
    secondary: {
      light: themeColors.secondary.light,
      main: themeColors.secondary.main,
      dark: themeColors.secondary.dark
    },
    link: {
      light: themeColors.link.light,
      main: themeColors.link.main,
      dark: themeColors.link.dark
    },
    error: {
      light: themeColors.error.light,
      main: themeColors.error.main,
      dark: themeColors.error.dark
    },
    warning: {
      light: themeColors.warning.light,
      main: themeColors.warning.main,
      dark: themeColors.warning.dark
    },
    success: {
      light: themeColors.success.light,
      main: themeColors.success.main,
      dark: themeColors.success.dark
    },
    info: {
      light: themeColors.info.light,
      main: themeColors.info.main,
      dark: themeColors.info.dark
    },
    step: {
      light: themeColors.step.light,
      main: themeColors.step.main,
      dark: themeColors.step.dark
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2
        },
        rounded: {
          borderRadius: 80
        },
        roundedOutlined: {
          borderRadius: 80,
          backgroundColor: 'transparent',
          border: '1px solid'
        },
        colorPrimary: {
          backgroundColor: themeColors.primary.light,
          color: themeColors.primary.dark
        },
        colorSecondary: {
          backgroundColor: themeColors.secondary.light,
          color: themeColors.secondary.dark
        },
        colorInfo: {
          backgroundColor: themeColors.info.light,
          color: themeColors.info.dark
        },
        colorSuccess: {
          backgroundColor: themeColors.success.light,
          color: themeColors.success.dark
        },
        colorError: {
          backgroundColor: themeColors.error.light,
          color: themeColors.error.dark
        },
        colorWarning: {
          backgroundColor: themeColors.warning.light,
          color: themeColors.warning.dark
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlinedInherit: {
          borderColor: grey[200],
          color: 'black'
        },
        roundedOutlined: {
          fontSize: '14px',
          textTransform: 'lowercase',
          lineHeight: '17px',
          fontWeight: '400',
          border: '1px solid',
          borderRadius: '80px',
          borderColor: '#C8C6C9',
          background: common.white,
        },
        roundedOutlinedSuccess: {
          color: themeColors.success.dark,
          backgroundColor: themeColors.success.light
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: '10px',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none'
            }
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          marginLeft: 0
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            padding: '3px'
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '.MuiSelect-outlined': {
            padding: '10px'
          }
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px'
          }
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: themeColors.secondary.main
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none'
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '&.Mui-expanded': {
            margin: '12px 0'
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: '700',
          top: 5,
          right: 5,
          padding: '0 2px'
        }
      }
    }
  }
})


export default lightTheme