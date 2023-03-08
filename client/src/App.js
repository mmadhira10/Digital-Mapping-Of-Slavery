import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    MenuAppBar,
    HomeScreen 
} from "./components";

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <Routes> 
                <Route path='/' element={<HomeScreen/>} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App
