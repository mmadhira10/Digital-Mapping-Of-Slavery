import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function MenuAppBar() {
  const theme = createTheme({
    typography: {
      button: {
        fontStyle: 'italic',
        fontSize: 24,
        fontFamily: '"Helvetica Neue"'
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#441F1F'}}>
        <Toolbar>
          <Button color="inherit" style={{maxWidth: '407px', maxHeight: '100px', minWidth: '407px', minHeight: '100px'}}>HOME</Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '100px', minWidth: '407px', minHeight: '100px'}}>MAP</Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '100px', minWidth: '407px', minHeight: '100px'}}>ABOUT</Button>
          <Button color="inherit"  style={{maxWidth: '407px', maxHeight: '100px', minWidth: '407px', minHeight: '100px'}}>CONTACT</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}