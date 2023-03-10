import * as React from 'react';
import "leaflet/dist/leaflet.css";
import "../style.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer } from "react-leaflet"

export default function MapScreen () {
    const theme = createTheme();
    return(
        <MapContainer center={[48.8566, 2.3522]} xoom={13}>
            <TileLayer 
                attributions='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="'https://tile.openstreetmap.org/{z}/{x}/{y}.png'"
            />
        </MapContainer>
    )
}