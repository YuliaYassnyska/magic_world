import * as THREE from "../node_modules/three/build/three.module.js";
import { getObjects } from "./createObjects.js";

let width = window.innerWidth;
let height = window.innerHeight;

export let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 50;

export let scene = new THREE.Scene();
let objects = getObjects();

objects.map((el) => {
    scene.add(el)
})

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export function render()
{
    requestAnimationFrame(render);
    objects[0].rotation.x += 0.01
    objects[0].rotation.y += 0.01
    renderer.render(scene, camera);
}