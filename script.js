// exact coordinates for 99 King St in Newport, RI 02840
// 41.481469, -71.310429
var map = L.map("map").setView([41.481469, -71.310429], 15);

// 2. Add the OpenStreetMap tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 3. Add a marker for 99 King Street
L.marker([41.481469, -71.310429])
  .addTo(map)
  .bindPopup("<b>99 King Street</b><br>Newport, RI 02840")
  .openPopup();

//
