import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapComponent.css';

// Corrige le problème où les icônes de marqueur ne s'affichent pas correctement à cause des chemins d'accès dans Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
    const mapRef = useRef(null); // Utilisation de useRef pour accéder à l'élément DOM

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS popup.<br> Easily customizable.')
                .openPopup();

            return () => map.remove();
        }
    }, []);


    return <div ref={mapRef} className={styles.mapContainer}></div>;
};

export default MapComponent;
