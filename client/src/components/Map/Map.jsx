import React, { useEffect } from "react"
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import { Marker } from 'https://cdn.esm.sh/react-leaflet/Marker'
import { Popup } from 'https://cdn.esm.sh/react-leaflet/Popup'

const Map = ({ destination }) => {
    const map = useMap()
    useEffect(() => {
        map.setView([destination.lat, destination.lng], 13)
    }, [destination, map])

    return (
        <MapContainer center={[destination.lat, destination.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[destination.lat, destination.lng]}>
                <Popup>
                    {destination._key}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map