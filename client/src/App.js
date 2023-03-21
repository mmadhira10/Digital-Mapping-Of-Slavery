import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    MenuAppBar,
    HomeScreen, 
    AboutPage, 
    ContactPage
} from "./components";

const App = () =>{
    return (
        <BrowserRouter>
            <MenuAppBar/>
            <Routes> 
                <Route path='/' element={<HomeScreen/>} /> 
                {/* <Route path='/map' element={<Map/>} />  */}
                <Route path='/about' element={<AboutPage/>} /> 
                <Route path='/contact' element={<ContactPage/>} /> 
                {/* <Route path='/people' element={<PeoplePage/>} /> 
                <Route path='/places' element={<PlacesPage/>} />
                <Route path='/businesses' element={<BusinessesPage/>} />   */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
