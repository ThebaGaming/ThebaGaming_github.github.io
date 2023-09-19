let button = document.getElementById("get-location");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude || 0;
    let long = position.coords.longitude || 0;
    var map = L.map('map').setView([lat, long], 13);
  });
});

