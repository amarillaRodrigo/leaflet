import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; 
//MapContainer se utiliza para definir propiedades generales del mapa
//center indica en que cordenadas se centra el mapa
//zoom, el nivel de zoom al centro
//y style por defecto indica que cantidad de alto y ancho de la pantalla ocupa el mapa
import "leaflet/dist/leaflet.css"; //Importa los estilos del mapa predefinidos previamente por leaflet

export default function Map() {
  return (
    <MapContainer
      center={[-26.17839527043169, -58.18449850667601]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
