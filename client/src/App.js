import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    MenuAppBar,
    HomeScreen,
    MapScreen, 
    AboutPage, 
    ContactPage
} from "./components";

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <Routes> 
                <Route path='/' element={<HomeScreen/>} /> 
                <Route path='/map' element={<MapScreen/>} />
                <Route path='/about' element={<AboutPage/>} /> 
                <Route path='/contact' element={<ContactPage/>} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App
