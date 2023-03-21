import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    MenuAppBar,
    HomeScreen,
    MapScreen, 
    AboutPage, 
    ContactPage,
    PeoplePage,
    BusinessesPage,
    PlacesPage
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
                <Route path='/people' element={<PeoplePage/>} /> 
                <Route path='/businesses' element={<BusinessesPage/>} />
                <Route path='/places' element={<PlacesPage/>} />  
            </Routes>
        </BrowserRouter>
    )
}

export default App
