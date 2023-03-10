import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    MenuAppBar,
    HomeScreen,
    MapScreen 
} from "./components";

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <Routes> 
                <Route path='/' element={<HomeScreen/>} /> 
                <Route path='map' element={<MapScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
