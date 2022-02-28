import * as THREE from "../node_modules/three/build/three.module.js"

let width = window.innerWidth;
let height = window.innerHeight;

let fov = 75;
let camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);

let scene = new THREE.Scene();

let geometry = new THREE.BoxGeometry(10, 10, 10);
let material = new THREE.MeshBasicMaterial({color: 0xfcba03})
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 50;


let renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

function render()
{
    console.log(1)
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

render();