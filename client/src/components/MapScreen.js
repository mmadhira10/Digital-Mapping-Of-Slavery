import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import Box from '@mui/material/Box';
import paper from './img/paper.png';
import "./style.css";
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

export default function MapScreen () {
    const theme = createTheme();
    const [map, setMap] = useState();

    async function getTables() {
        try {
            const response = await axios.get("http://localhost:4000/map");
            console.log(response.data["table"][0]);
            setMap(response.data["table"][0]);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTables();
    }, []);

    return(
        <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    )
}