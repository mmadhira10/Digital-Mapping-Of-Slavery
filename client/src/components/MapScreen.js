import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { 
    Box, 
    Typography
} from '@mui/material';
import paper from './img/paper.png';
import "./style.css";
import axios from 'axios';
import L from "leaflet";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import img from "./img/pin.png";
import shadow from "./img/shadow.png";
// import MapInfo from "./MapInfo";

const popupContent = {
    textAlign: "center",
    height: "350px",
    marginTop: "30px"
  };
  
  const popupHead = {
    fontWeight: "bold",
    fontSize: "22px"
  };
  
  const popupText = {
    fontSize: "15px",
    marginBottom: "20px"
  };  

  const popupType = {
    fontStyle: "italic" 
  };  

export default function MapScreen () {
    const theme = createTheme();
    const [map, setMap] = useState([]);
    const [view, setView] = useState([51.505, -0.09]);
    const [zoom, setZoom] = useState(3);

    const markerIcon = new L.Icon({
        iconUrl: img,
        shadowUrl: shadow,
        iconSize: [28,48],
        iconAnchor: [12, 54],
        shadowSize:[28,48],
        shadowAnchor: [8,54]
    })

    async function getTables() {
        try {
            const response = await axios.get("http://localhost:4000/map");
            setMap(response.data.table[0]);
        }
        catch (error) {
            console.log(error);
        }
    }

    function handleMarkerOpen(arr) {
        setView(arr);
        console.log(view);
        setZoom(14)
    }

    function handleMarkerClose() {
        setView([51.505, -0.09]);
        console.log(view)
        setZoom(3);
    }

    function handleInfoOpen(event) {
        setClick(true);
    }   

    function handleInfoClose() {
        setClick(false);
    }   

    useEffect(() => {
        getTables();
    }, []);

    // console.log(map);
    return(
        <Box sx={{ flexGrow: 3 }} style={{ backgroundImage: `url(${paper})`, position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}>
            <MapContainer center={view} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {map.map((point, key) => (
                    <Marker 
                        eventHandlers={{
                            click: () => handleInfoOpen([point.latitude, point.longitude])
                        }}
                        position={[point.latitude, point.longitude]} 
                        icon={markerIcon}
                    >
                        <Popup 
                            className="request-popup" 
                        >
                            <div style={popupContent}>
                                <div style={popupHead}>
                                    {point.entity}
                                </div>
                                <div style={popupText}>
                                    <div>
                                        {point.place}
                                    </div>
                                    <div style={popupType}>
                                        {point.type}
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}       
            </MapContainer>
        </Box>
    )
}