import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import "../stylesheets/App.css"
import MainBanner from './MainBanner'
import NewRoute from './NewRoute'
import HomePage from './HomePage'

export default function App() {

  const theme = useTheme()

  const [homePage, setHomePage] = React.useState(true)
  const [newRoutes, setNewRoutes] = React.useState(false)

  return (
    <div className="page" style={{height: screen.height}}>

      <MainBanner setHomePage={setHomePage} setNewRoutes={setNewRoutes}></MainBanner>
      { homePage && <HomePage setHomePage={setHomePage} setNewRoutes={setNewRoutes} /> }
      { newRoutes && <NewRoute setHomePage={setHomePage} setNewRoutes={setNewRoutes} /> }

    </div>
  )
}