let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let altText = document.getElementById("altitude");
let speText = document.getElementById("speed");
let accText = document.getElementById("accuracy");
let dateText = document.getElementById("date");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let alt = position.coords.altitude;
    let speed = position.coords.speed || 0;;
    let acc = position.coords.accuracy;
    let date = new Date(position.timestamp);


    latText.innerText = lat.toFixed(5);
    longText.innerText = long.toFixed(5);
    altText.innerText = alt.toFixed(2);
    speText.innerText = speed.toFixed(2);
    accText.innerText = acc.toFixed(2);
    dateText.innerText = date;
  });
});
