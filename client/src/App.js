import React from "react";
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { MenuAppBar } from "./components";
import { SearchBar } from "./components";
import { Button } from "@mui/material";
import { fontSize, margin } from "@mui/system";
// import "../styles/home.css"

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <Router>
                <Route path='/' exact component={<HomeScreen/>} />
            </Router>
        </BrowserRouter>
    )
}

export default App
