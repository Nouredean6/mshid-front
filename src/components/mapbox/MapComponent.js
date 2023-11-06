import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';

// Add your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1Ijoibm91cmVkZWFuIiwiYSI6ImNsang4NHZtaTAweDczY215MXg3bms0azUifQ.Bh9YzLCgYLpw3j6WXDhgzQ';

const MapComponent = ({ locations }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container', // ID of the container element
      style: 'mapbox://styles/nouredean/clk0peswp009e01pfh10g0qm8', // Mapbox style URL
      scrollZoom: false

    });

    const bounds = new mapboxgl.LngLatBounds();

    if (locations && Array.isArray(locations)) {
      locations.forEach(loc => {
        // Extract the coordinates from the current location
        const [longitude, latitude] = loc.coordinates;

        // Add marker
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map);

        // Add popup
        new mapboxgl.Popup({
          offset: 30
        })
          .setLngLat([longitude, latitude])
          .setHTML(`<h3>Day ${loc.day}: ${loc.description}</h3>`)
          .addTo(map);

        // Extend map bounds to include current location
        bounds.extend([longitude, latitude]);
      });

      // Fit the map to the bounds
      map.fitBounds(bounds, {
    padding: {
      top: 100,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
    }

    // Clean up the map instance on component unmount
    return () => map.remove();
  }, [locations]);

  return <div id="map-container" style={{ width: '90%', height: '400px', margin:'80px 0 0 80px' }} />;
};

export default MapComponent;
