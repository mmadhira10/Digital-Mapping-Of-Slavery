import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './SearchBar'
import { fontSize, margin } from "@mui/system";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import background from './img/WorldImage.jpg';

const NewButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    fontFamily: 'Cambria',
    padding: '6px 20px',
    border: '3px solid',
    lineHeight: 1.5,
    backgroundColor: 'linen',
    borderColor: '#8E3E3E',
    minWidth: '30%',
    minHeight: '60px',
    margin: '10px',
    color: '#8E3E3E',
    '&:hover': {
      backgroundColor: '#8E3E3E',
      boxShadow: 'none',
      color: 'linen'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

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
            <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${background})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
                <Box class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '200px'}}>
                    <Typography variant="h1"> MAPPING THE <br/> LEGACIES OF <br/> SLAVERY </Typography>
                </Box>
                <Box class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '50px'}}>
                    <SearchBar/>
                </Box>
                <Box style={{position: 'static', maxWidth: '50%', margin: 'auto', fontSize: '24px', padding: '40px'}}>
                    <NewButton href="/people">People</NewButton>
                    <NewButton href="/places">Places</NewButton>
                    <NewButton href="/businesses">Businesses</NewButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
}