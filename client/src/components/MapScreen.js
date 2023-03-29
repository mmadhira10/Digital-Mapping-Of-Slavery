import * as React from 'react';
import "leaflet/dist/leaflet.css";
import Box from '@mui/material/Box';
import paper from './img/paper.png';
import "./style.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapScreen () {
    const theme = createTheme();
    return(
        <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </Box>
    )
}