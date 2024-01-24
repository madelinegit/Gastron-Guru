import { GoogleMap, LoadScript } from '@react-google-maps/api'

const Map = () => {
  const mapContainerStyle = {
    width: '435px',
    height: '461px',
  }

  //please talk to Adam for key (need to set up .env)
  const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY!

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: 41.3851, lng: 2.1734 }}
        zoom={10}
      />
    </LoadScript>
  )
}
export default Map
