import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './SearchBar'
import { fontSize, margin } from "@mui/system";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import paper from './img/paper.png';
import MenuAppBar from './MenuAppBar';

export default function AboutPage() {
    const theme = createTheme({
        typography: {
          button: {
            fontSize: 24,
            fontFamily: '"Cambria"',
          },
          h2: {
            fontSize: 40,
            fontFamily: '"Cambria"',
            fontColor: "Black",
            fontStyle: "italic",
          },
          p: {
            fontSize: 20,
            fontFamily: '"Cambria"',
            fontColor: "Black",
          }
        },
      });

    return(
        <ThemeProvider theme={theme}>
            <MenuAppBar/>
            <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
              <Box class="styledTextField" style={{position: 'static', maxWidth: '85%', margin: 'auto', marginTop: '150px'}}>
                <Typography variant="h2"> About This Project </Typography>
                <Typography variant="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Typography>
              </Box>
            </Box>
        </ThemeProvider>
    );
}