import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './SearchBar'
import { fontSize, margin } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';


export default function HomeScreen() {
    const theme = createTheme({
        typography: {
          button: {
            fontSize: 24,
            fontFamily: '"Cambria"',
          },
          h1: {
            fontSize: 72,
            fontFamily: '"Cambria"',
            fontColor: "Black",
          }
        },
      });

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 3 }}>
                <Box class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '200px'}}>
                    <Typography variant="h1"> MAPPING THE LEGACIES OF SLAVERY </Typography>
                </Box>
                <Box class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '200px'}}>
                    <SearchBar/>
                </Box>
                <Box style={{position: 'static', maxWidth: '50%', margin: 'auto', fontSize: '24px', padding: '40px'}}>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>People</Button>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Places</Button>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Businesses</Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}