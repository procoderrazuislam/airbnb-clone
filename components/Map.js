import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const cordinates = searchResult?.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(cordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/procoderrazuislam/cktzdkdm81ujg18lhbf58hs1q"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResult.map((result) => (
          <div key={result.long}>
            <Marker
              latitude={result.lat}
              longitude={result.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer animate-bounce"
                role='img'
                aria-label = 'push-pin'
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
                <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
                >
                    {result.title}
                </Popup>
            ): false}
          </div>
        ))}
      </ReactMapGL>
    </>
  );
};

export default Map;
