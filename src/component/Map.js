import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const token = process.env.REACT_APP_TOKEN;

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/arpit-sarkar/clkbgktv700to01qy7akp9q4h"
      mapboxApiAccessToken={token}
      {...viewport}
 // Ensure onViewportChange updates the state correctly
    />
  );
}

export default Map;
