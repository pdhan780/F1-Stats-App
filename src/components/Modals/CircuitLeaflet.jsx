import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import the Leaflet CSS

import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: "/assets/marker.png",
 iconSize: [25,25]
})
const CircuitLeaflet = ({ lat, lng, name }) => {
    const position = [lat, lng];

    return(
<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '16rem', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}> 
          <Popup>
            {name}
          </Popup>
        </Marker>
      </MapContainer>
    );
};

export default CircuitLeaflet;
