import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { ChefDataProps } from "../ChefCards/types";
import "./Map.scss";

type MapProps = {
  activeChef: {
    name: string;
    coordinates: { latitude: number; longitude: number };
  };
  chefData: ChefDataProps[];
};

const Map = ({ activeChef, chefData }: MapProps) => {
  //please talk to Adam for key (need to set up .env)
  const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY!;

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY} version="weekly">
      <GoogleMap
        center={
          !activeChef
            ? { lat: 40.73061, lng: -73.935242 }
            : {
                lat: activeChef.coordinates.latitude,
                lng: activeChef.coordinates.longitude,
              }
        }
        zoom={13}
        mapContainerClassName="chefs-map-container"
      >
        {chefData.map((chef) => {
          const isActive = chef.name == activeChef.name;
          return (
            <>
              <Marker
                key={chef.user_id}
                position={{
                  lat: chef.coordinates.latitude,
                  lng: chef.coordinates.longitude,
                }}
                zIndex={isActive ? 1 : 0}
              />

              <InfoWindowF
                position={{
                  lat: chef.coordinates.latitude,
                  lng: chef.coordinates.longitude,
                }}
                key={`${chef.user_id}-info-window`}
                zIndex={isActive ? 1 : 0}
              >
                <span className={`chef-name-span ${isActive && "highlighted"}`}>
                  {chef.name}
                </span>
              </InfoWindowF>
            </>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
