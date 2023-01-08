import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { positions, polylineMain, polylineSub } from "../../data/position";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

export default function Map() {

  //settings for the polyline
  const polylineRed = { color: "#DB163C" };

  //setting the custom icon for map markers
  var frogIcon = L.icon({
    iconUrl: "frogMarker.png",
    iconSize: [40, 40],
    popupAnchor: [0, -17],
  });

  //using components from leaflet to make a map and add markers 
  return (
    <div className="flex justify-center w-full h-50 p-3 mb-5">

      <MapContainer
        className="flex justify-center w-full h-140"
        center={[49.28594, -123.11129]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((marker, index) => (
          
          <Marker
            key={index}
            className="hover:scale-125"
            position={positions[index].pos}
            icon={frogIcon}
          >
            <Popup className="text-left">
              <b>Expo Line</b>
              <br></br>
              {positions[index].desc}
            </Popup>
          </Marker>
        ))}
        

        <Polyline pathOptions={polylineRed} positions={polylineMain} />
        <Polyline pathOptions={polylineRed} positions={polylineSub} />
      </MapContainer>
    </div>
  );
}
