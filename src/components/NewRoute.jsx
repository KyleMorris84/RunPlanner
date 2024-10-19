import { useTheme } from '@mui/material/styles';
import { Typography, Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function NewRoute() {

    const theme = useTheme()

    return (
        <Box sx={{
            display : "flex", 
            flexDirection : "column", 
            alignItems : "center",
            marginTop : "30px"
        }}>
            <Typography variant="h2">New Route</Typography>
            <Typography sx={{ paddingTop: "40px", paddingBottom: "5px" }}>Enter your postcode to get started</Typography>
            <Box sx={{
                display : "flex",
                alignItems : "center",
                paddingLeft : "30px"
            }}>
                <TextField size="small" sx={{ textAlign : "center", width : "100px"  }}></TextField>
                <IconButton sx={{ height: "50px", width : "50px"}}>
                    <SearchIcon sx={{width : "40px"}} ></SearchIcon>
                </IconButton>
            </Box>
        </Box>
    )
}