import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import * as view from "@arcgis/core/core/events";

const MapComponent = ({getLatLong, closeModal}) => {
    const mapRef = useRef(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        console.log("Is Effect Called");
        loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
            .then(([Map, MapView]) => {
                const map = new Map({
                    basemap: 'streets',
                });

                const view = new MapView({
                    container: mapRef.current,
                    map: map,
                    center: [-122.4194, 37.7749],
                    zoom: 12,
                });

                view.container.style.cursor = 'pointer';


                // Add a click event handler to capture coordinates
                view.on('click', (event) => {
                    console.log("On Click Called");
                    const { mapPoint } = event;
                    getLatLong(mapPoint.latitude, mapPoint.longitude);
                    closeModal();
                    // setCoordinates({
                    //     lat: mapPoint.latitude,
                    //     lon: mapPoint.longitude,
                    // });
                });
            })
            .catch((error) => {
                console.error('Error loading ArcGIS modules:', error);
            });
    }, []);

    return (
        <div>
            <div ref={mapRef} style={{ height: '500px' }} />
            {/*{coordinates && (*/}
            {/*    <div>*/}
            {/*        <p>Latitude: {coordinates.lat.toFixed(4)}</p>*/}
            {/*        <p>Longitude: {coordinates.lon.toFixed(4)}</p>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default MapComponent;
