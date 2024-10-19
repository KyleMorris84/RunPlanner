import { useTheme } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Toolbar, Typography, AppBar, IconButton } from '@mui/material';
import BasicMenu from './BasicMenu'
import { styled } from '@mui/system'

export default function MainBanner({ setHomePage, setNewRoutes }) {

    const theme = useTheme()

    const Banner = styled(AppBar)(({theme}) => ({
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        alignItems : "center",
        height: "10%"
      }))

    return (
        <Banner>
            <IconButton onClick={ () => { 
                setHomePage(true)
                setNewRoutes(false)
            }}>
                <DirectionsRunIcon sx={{ width: theme.spacing(3.5), margin: theme.spacing(2) }}/>
            </IconButton>
            <Toolbar style={{ padding: 0 }}>
                <Typography variant="h2">Run Planner</Typography>
            </Toolbar>
            <BasicMenu sx={{ marginLeft:"auto", marginRight: 2 }}/>
        </Banner>
    )
}