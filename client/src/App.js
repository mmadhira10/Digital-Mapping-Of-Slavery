import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuAppBar } from "./components";
import { Button } from "@mui/material";

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
        </BrowserRouter>
    )
}

export default App
