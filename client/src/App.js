import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ResponsiveAppBar } from ".//components/ResponsiveAppBar";

const App = () =>{
    return (
        <BrowserRouter>
            <ResponsiveAppBar/>
        </BrowserRouter>
    )
}

export default App
