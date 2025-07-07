mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates, 
    zoom: 9,
});

const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML("<h4>Exact location</h4>"))

.addTo(map);
