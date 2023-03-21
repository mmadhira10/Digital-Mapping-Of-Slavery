import * as React from 'react';
import { TextField } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

export default function SearchBar() {
  const theme = createTheme({
    TextField: {
      fontSize: 24,
      fontFamily: '"Helvetica"',
      color: "#E9D1B5",
      border: '3px solid',
      borderColor: '#8E3E3E'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TextField fullWidth id="outlined-start-adornment" variant="outlined"
          InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>,
            }}
            style={{borderRadius: '2px', backgroundColor: 'linen'}}
      >
          
      </TextField>
    </ThemeProvider>
  );
}