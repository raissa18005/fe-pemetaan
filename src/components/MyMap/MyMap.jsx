import React from "react";
import {
    MapContainer,
    TileLayer,
    useMap,
    GeoJSON,
    Marker,
    Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./mymap.scss";
import mapData from "../../data/indonesia.json";
import mapData2 from "../../data/data2.json";

const MyMap = () => {
    // console.log(mapData);
    let data = mapData2.map((map) => map.geojson);

    return (
        <div className="myMap">
            <MapContainer
                center={[0.7893, 113.9213]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={data}></GeoJSON>
                {mapData2.map((data) => (
                    <Marker
                        position={[data.lat, data.long]}
                        icon={
                            new Icon({
                                iconUrl: markerIconPng,
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                            })
                        }
                    >
                        <Popup>{data.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MyMap;
