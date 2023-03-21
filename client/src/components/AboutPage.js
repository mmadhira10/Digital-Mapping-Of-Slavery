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
            fontWeight: "bold",
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
                <Typography variant="p"> This project was designed by students and faculty through the Stony Brook University Vertically Integrated Project Mapping the Legacies of Slavery. A Digital Humanities Project </Typography>
                <br/><br/>
                <Typography variant="p"> <b>Goals:</b> The website disseminates innovative and timely research on the legacies of slavery in the contemporary world. </Typography>
                <br/><br/>
                <Typography variant="p"> The project addresses the question of how our contemporary world (institutions, monuments, memorials, museums, businesses, and banks) both reflects and shapes ways of understanding the history and heritage of nations sustained by colonialism and slavery. More specifically, we concentrate on how visible the legacies of slavery are in our contemporary world. The research on people involved in the slave trade and their connections to several businesses, banks, and transatlantic routes is brought to the digital platform, to make them available first, and to build maps that can allow the viewer to see the impact of slavery through time and space. 
                </Typography>
                <br/><br/>
                <Typography variant="p"> <b>Methods & Technologies:</b> Archival research; digital mapping
                </Typography>
                <br/><br/>
                <Typography variant="p"> <b>Vertically Integrated Projects (VIP). Stony Brook University.</b>
                </Typography>
                <br/><br/>
                <Typography variant="p"> The VIP Program was established on a project-based model for higher education.  It unites undergraduate students, graduate students, and faculty members in multidisciplinary teams that work on long-term projects in research, design, innovation, and entrepreneurship.  It provides a real-world context for coursework, shapes career paths, and builds professional, teamwork, and leadership skills that cannot be taught in the classroom.  Projects, teams, and participants are elevated by the broad knowledge, talents, and experiences assembled by engaging individuals from diverse disciplines and backgrounds.  The long-term nature of the projects provides students with the opportunity to grow as team members, make substantial contributions, and rise through the ranks of team leadership.
                </Typography>
              </Box>
            </Box>
        </ThemeProvider>
    );
}