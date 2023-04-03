import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import Box from '@mui/material/Box';
import paper from './img/paper.png';
import "./style.css";
import axios from 'axios';
import L from "leaflet";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import img from "./img/pin.png";
import shadow from "./img/shadow.png";

export default function MapScreen () {
    const theme = createTheme();
    const [map, setMap] = useState([]);

    const markerIcon = new L.Icon({
        iconUrl: img,
        shadowUrl: shadow,
        iconSize: [28,50],
        iconAnchor: [12, 54],
        shadowSize:[28,50],
        shadowAnchor: [8,54]
    })
    console.log(markerIcon);
    async function getTables() {
        try {
            const response = await axios.get("http://localhost:4000/map");
            setMap(response.data.table[0]);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTables();
    }, []);

    // console.log(map);
    return(
        <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
            <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {map.map((point) => (
                    <Marker position={[point.latitude, point.longitude]} icon={markerIcon}>
                        {console.log(point)}
                    </Marker>
                ))}       
            </MapContainer>
        </Box>
    )
}