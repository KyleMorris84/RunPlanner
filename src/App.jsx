import * as React from 'react';
import { AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {

  const [sideDraw, setSideDraw] = React.useState(false);
  function toggleSideDraw() {
    setSideDraw(oldState => !oldState)
  }
  
  return (
    <>
      <AppBar position="sticky" sx={{
        'background-color': 'green',
        'font-family' : 'roboto',
        'font-weight' : 500,
        'font-size' : 25
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSideDraw}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={sideDraw}
            onClose={toggleSideDraw}
          >
            Test
          </Drawer>
          Run Planner
        </Toolbar>
      </AppBar>
    </>
  )
}