import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import FetchApi from "../services/FetchApi";

const Details = () => {

    const [storeData, setStoreData] = useState([]);
    const [searchParams] = useSearchParams();

    async function createMap() {
        ///----------------get location Latitude and Longitude-------------------///
        var address = storeData[0].location
        const response = await fetch('https://www.als.ogcio.gov.hk/lookup?q=' + address, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });

        const data = await response.json();
        const x = (data['SuggestedAddress'][0]['Address']['PremisesAddress']['GeospatialInformation']['Latitude'])
        const y = (data['SuggestedAddress'][0]['Address']['PremisesAddress']['GeospatialInformation']['Longitude'])

        ///----------------map-------------------///
        const mymap = L.map("mapid").setView([x, y], 25);
        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl).addTo(mymap);
        const redIcon = new L.Icon({
            iconUrl:
                "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
            shadowUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const marker = L.marker([x, y], { icon: redIcon }).addTo(
            mymap
        );
        marker.bindPopup(storeData[0].name).openPopup();
        ///-------------------------------///


    }

    useEffect(() => {
        (storeData.length === 0) ?
            FetchApi(searchParams, setStoreData)
            :
            createMap()
    }, [storeData])

    return (

        <div>
            {storeData.map((e, index) => {
                return (
                    <div key={index}>
                        <h2>{e.name}</h2>
                        <h5>Status: {e.status == 0 ? '仲健在' : '已執7'}</h5>
                        <h5>Location: {e.location}</h5>
                        <div id="mapid" style={{ height: "50vh", width: "50vw" }} />
                    </div>
                );
            }
            )}
        </div>
    )
}


export default Details;