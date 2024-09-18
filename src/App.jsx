import * as React from 'react';
import { AppBar, Typography, Box, Button, } from '@mui/material';
import { styled } from '@mui/system'
import { ThemeProvider, useTheme } from '@mui/material/styles';
// import hills from './assets/hillsDuplicated.png'
// import clouds from './assets/clouds.png'
import "./App.css"
import MainBanner from './MainBanner'

export default function App() {

  const theme = useTheme()

  const HomePageButton = styled(Button)(({ theme }) => ({
    width: "20%",
    padding: "2%",
    borderRadius: 7
  }))

  return (
    <ThemeProvider theme={theme}>
      <div className="page" style={{height: screen.height}}>

        <MainBanner></MainBanner>

        <Box sx={{ "mt" : 4 }}>
          <Typography align="center">
            A route planning app to measure distance, altitude change and calories burned for your runs :)
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-evenly", mt: 4}}>
            <HomePageButton variant="contained" color="secondary">
              <Typography variant="h4" sx={{fontWeight: 300}}>New route</Typography>
            </HomePageButton>
            <HomePageButton variant="contained" color="secondary">
              <Typography variant="h4" sx={{fontWeight: 300}}>My routes</Typography>
            </HomePageButton>
          </Box>
        </Box>

        {/* <img className="clouds" src={clouds}></img>
        <img className="hills" src={hills}></img> */}

      </div>

  </ThemeProvider>
  )
}