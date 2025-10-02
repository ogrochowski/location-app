import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./map.module.css";
import "leaflet/dist/leaflet.css";

export const Map = ({
  latitude,
  longitude,
  title,
}: {
  latitude: number | undefined;
  longitude: number | undefined;
  title: string;
}) => {
  if (latitude === undefined || longitude === undefined) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <MapContainer
        center={{ lat: latitude, lng: longitude }}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={{ lat: latitude, lng: longitude }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
