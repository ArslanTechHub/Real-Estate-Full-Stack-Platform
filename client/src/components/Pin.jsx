import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex items-center">
          {/* Left side - Image */}
          <div className="mr-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-30 h-30 object-cover rounded" // Adjusted width and height
            />
          </div>
          {/* Right side - Text content */}
          <div>
            <Link to={`/${item.id}`} className="text-blue-500 font-semibold block">{item.title}</Link>
            <div>{item.bedroom} bedroom</div>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
