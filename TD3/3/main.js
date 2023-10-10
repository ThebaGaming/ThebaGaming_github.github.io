import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0,0,0);
scene.add( cube );

const texture = new THREE.TextureLoader().load( "8k_earth_daymap.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

material.map = texture;

camera.position.z = 2;

const controls = new OrbitControls( camera, renderer.domElement );

const light = new THREE.AmbientLight( 0x404040,100 ); // soft white light
scene.add( light );

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

    controls.update()

	renderer.render( scene, camera );
}

function latLongToCartesian(latitude, longitude) {

    const latRad = (latitude * Math.PI) / 180;
    const longRad = (-longitude * Math.PI) / 180;
    const radius = 1;
  
    const x = radius * Math.cos(latRad) * Math.cos(longRad);
    const y = radius * Math.sin(latRad);
    const z = radius * Math.cos(latRad) * Math.sin(longRad);
  
    return { x, y, z };
}

function addMarker(latitude, longitude) {
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.02),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
  
    const { x, y, z } = latLongToCartesian(latitude, longitude);
  
    marker.position.set(x, y, z);
  
    scene.add(marker);
}

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude || 0;
    let long = position.coords.longitude || 0;
    console.log(lat);
    console.log(long);
    addMarker(lat,long);
});

addMarker(0,0);


function addMarkerPays(latitude, longitude,flag) {
    let textures = new THREE.TextureLoader().load( flag );
    const marker = new THREE.Mesh(
        new THREE.BoxGeometry(0.025,0.025,0.025),
        new THREE.MeshBasicMaterial({ map: textures })
    );
  
    const { x, y, z } = latLongToCartesian(latitude, longitude);
  
    marker.position.set(x, y, z);

    scene.add(marker);
    
}

function getPaysCoordinates() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const paysData = JSON.parse(xhr.responseText);
        afficherCoordonnees(paysData);
      } else {
        console.error('Erreur lors de la récupération des données des pays:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Erreur réseau lors de la récupération des données des pays.');
    };
    xhr.send();
  }
  
  function afficherCoordonnees(paysData) {
    paysData.forEach(pays => {
      const { flags, latlng } = pays;
      if (latlng) {
        const [latitude, longitude] = latlng;
        console.log(flags.png);
        addMarkerPays(latitude, longitude, flags.svg);
      }
    });
  }
  
getPaysCoordinates();
  
  
  

animate();

