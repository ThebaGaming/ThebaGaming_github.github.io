let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");
let speText = document.getElementById("speed");
let accText = document.getElementById("accuracy");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;
    let speed = position.coords.speed;
    let acc = position.coords.accuracy;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
    altText.innerText = alt.toFixed(2);
    speText.innerText = speed.toFixed(2);
    accText.innerText = acc.toFixed(2)
  });
});
