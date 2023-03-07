import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


export default function HomeScreen() {
    const theme = createTheme({
        typography: {
          button: {
            fontStyle: 'italic',
            fontSize: 24,
            fontFamily: '"Helvetica Neue"'
          },
          h1: {
            fontStyle: 'italic',
            fontSize: 24,
            fontFamily: '"Helvetica Neue"',
            fontColor: "Black"
          }
        },
      });

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 3 }}>
                <div class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '200px'}}>
                    <h1 style={{font: 'Cambria', fontSize: 72, maxWidth: 800}}> MAPPING THE LEGACIES OF SLAVERY </h1>
                    <SearchBar/>
                </div>
                <div style={{position: 'static', maxWidth: '50%', margin: 'auto', fontSize: '24px', padding: '40px'}}>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>People</Button>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Places</Button>
                    <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Businesses</Button>
                </div>
            </Box>
        </ThemeProvider>
    );
}