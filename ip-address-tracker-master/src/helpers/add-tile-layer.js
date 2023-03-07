import L from "leaflet";

export function addTileLayer(map) {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFsMGZmbiIsImEiOiJjbGV4MHk1bmswaTd3M3Jxd3Ryczlja2dqIn0.2k-r2w-60WJcjcm7NWoySA",
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Mikhail Nepomnyashchii</a>.',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    },
  ).addTo(map);
}
