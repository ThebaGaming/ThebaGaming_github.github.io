import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1,1,1);
scene.add( cube );

const texture = new THREE.TextureLoader().load( "eyes_up_here_maggot__by_sniperstalker.png" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

material.map = texture;

camera.position.z = 100;

const controls = new OrbitControls( camera, renderer.domElement );

const light = new THREE.AmbientLight( 0x404040,100 ); // soft white light
scene.add( light );

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    controls.update()

	renderer.render( scene, camera );
}

animate();

const loader = new GLTFLoader();

loader.load( 'model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const loader2 = new GLTFLoader();

loader2.load( 'ToyotaAE86.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );