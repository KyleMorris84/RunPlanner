import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App.jsx'
import './main.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  spacing: 16,
  palette: {
    mode: 'light',
    primary: {
      main: '#93B7BE',
      contrastText: '#1C2321'
    },
    secondary: {
      main: '#C1666B',
      contrastText: '#f5f5f5'
    },
    tertiary: {
      main: "#285943"
    },
    eerieBlack: {
      main: "#1C2321"
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize : "70px"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
