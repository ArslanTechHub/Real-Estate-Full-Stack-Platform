// import React from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Pin from './Pin';

// const Map = ({ items }) => {
//   return (
//     <MapContainer
//       center={[31.5204, 74.3587]} // Center of the map, adjust as needed
//       zoom={5}
//       scrollWheelZoom={true}
//       className="w-full h-full rounded-2xl"
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {items.map(item => (
//         <Pin item={item} key={item.id} />
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;


import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from './Pin';

const MapController = ({ setMapRef }) => {
  const map = useMap();
  
  React.useEffect(() => {
    setMapRef(map);
  }, [map, setMapRef]);

  return null;
};

const Map = ({ items, setMapRef }) => {
  return (
    <MapContainer
      center={[31.5204, 74.3587]}
      zoom={5}
      scrollWheelZoom={true}
      className="w-full h-full rounded-2xl"
    >
      <MapController setMapRef={setMapRef} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;