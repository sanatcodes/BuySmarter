import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../css/index.css";

export default function GoogleMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 51.044308, lng: -114.063087 }), []);

  return (
    <>
      <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker
              position={{ lat: 18.52043, lng: 73.856743 }}
              icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            />
          </GoogleMap>
        )}
      </div>
    </>
  );
}
