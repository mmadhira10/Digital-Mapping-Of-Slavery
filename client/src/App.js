import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuAppBar } from "./components";
import { SearchBar } from "./components";
import { Button } from "@mui/material";
import { fontSize, margin } from "@mui/system";
// import "../styles/home.css"

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <div class="styledTextField" style={{position: 'static', maxWidth: '75%', margin: 'auto', marginTop: '200px'}}>
                <h1 style={{font: 'Cambria', fontSize: 72, maxWidth: 800}}> MAPPING THE LEGACIES OF SLAVERY </h1>
                <SearchBar/>
            </div>
            <div style={{position: 'static', maxWidth: '50%', margin: 'auto', fontSize: '24px', padding: '40px'}}>
                <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>People</Button>
                <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Places</Button>
                <Button color="inherit" style={{backgroundColor: 'linen', minWidth: '30%', minHeight: '60px', margin: '10px'}}>Businesses</Button>
            </div>
        </BrowserRouter>
    )
}

export default App
