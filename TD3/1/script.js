
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var image = new Image();
image.src = "img/1.jpg";
image.onload = function() {

    ctx.drawImage(image, 0, 0);


    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100,230);
    ctx.lineTo(200,230);
    ctx.lineTo(200,100);
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(210,230);
    ctx.lineTo(270,230);
    ctx.lineTo(210,100);
    ctx.fill();

    ctx.fillStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(100,238);
    ctx.lineTo(80,260);
    ctx.lineTo(250,260);
    ctx.lineTo(270,238);
    ctx.fill();


    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(625, 20, 50, 0, Math.PI * 2);
    ctx.fill();
};