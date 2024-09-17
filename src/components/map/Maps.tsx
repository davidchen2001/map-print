import { Map, Marker, Popup} from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

interface Coordinates {
  long: number,
  lat: number 
}

function Maps({ searchResults: []}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result: Coordinates)  => {
    longitude: result.long,
    latitude: result.lat, 
  });

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <Map
      mapStyle={process.env.mapbox_style}
      mapboxAccessToken={process.env.mapbox_token}
      {...viewport}
      //onMove={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(result => {
        <div key={result.long}>
          <Marker
          longitude={result.long}
          latitude={result.lat}
          offset = {[-20, -10]}
          >
            <p onClick = {() => setSelectedLocation(result)} 
            className="cursor-pointer text 2xl animate-bounce"
            aria-label="push-pin">
            📌
            </p>

          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      })}
    </Map>
  );
}

export default Maps;
