import { LoadScript } from "@react-google-maps/api";
// GoogleMap,
import { AdvancedMarker, Map, APIProvider } from "@vis.gl/react-google-maps";
// import { ChefDataProps } from "../ChefCards/types";
import "./Map.scss";
import useChef from "../../utils/Api";

type MapProps = {
  latitude: number;
  longitude: number;
  user_id: string;
  name?: string;
};

const GoogleMaps = () => {
  // const mapContainerStyle = {
  //   width: "600px",
  //   height: "600px",
  // };

  //please talk to Adam for key (need to set up .env)
  const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY!;
  const chefData = useChef();

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
          <Map
            mapId={GOOGLE_MAP_API_KEY}
            defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
            defaultZoom={10}
          >
            {chefData.map((chef) => {
              return (
                <Marker
                  key={chef.user_id}
                  latitude={chef.coordinates.latitude}
                  longitude={chef.coordinates.longitude}
                  user_id={chef.user_id}
                  name={chef.name}
                />
              );
            })}
          </Map>
        </APIProvider>
      </LoadScript>
    </div>
  );
};

const Marker = ({ latitude, longitude, user_id, name }: MapProps) => {
  return (
    <AdvancedMarker
      position={{
        lat: latitude,
        lng: longitude,
      }}
      key={user_id}
      // className="map-marker"
    >
      {/* <span style={{ fontSize: "2rem" }}>🌳</span> */}
      <div className="map-marker">{name}</div>
    </AdvancedMarker>
  );
};

export default GoogleMaps;
