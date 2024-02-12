import { AdvancedMarker, Map, APIProvider } from "@vis.gl/react-google-maps";
import useChef from "../../utils/Api";
import "./Map.scss";

type MarkerProps = {
  latitude: number;
  longitude: number;
  user_id: string;
  name?: string;
  isActive: boolean;
};

type MapProps = {
  activeChef: number;
};

const GoogleMaps = ({ activeChef }: MapProps) => {
  //please talk to Adam for key (need to set up .env)
  const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY!;
  const chefData = useChef();

  return (
    <div className="map-container">
      <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
        <Map
          mapId={GOOGLE_MAP_API_KEY}
          defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
          defaultZoom={10}
        >
          {chefData.map((chef, index) => {
            const isActive = index === activeChef;
            return (
              <Marker
                key={chef.user_id}
                latitude={chef.coordinates.latitude}
                longitude={chef.coordinates.longitude}
                user_id={chef.user_id}
                name={chef.name}
                isActive={isActive}
              />
            );
          })}
        </Map>
      </APIProvider>
    </div>
  );
};

const Marker = ({
  latitude,
  longitude,
  user_id,
  name,
  isActive,
}: MarkerProps) => {
  return (
    <AdvancedMarker
      position={{
        lat: latitude,
        lng: longitude,
      }}
      key={user_id}
      className={`map-marker ${isActive && "highlighted"}`}
    >
      {name}
    </AdvancedMarker>
  );
};

export default GoogleMaps;
