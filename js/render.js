import * as THREE from "../node_modules/three/build/three.module.js";
import { getPlayer } from "./player.js";
import { playerMoves } from "./playerMoves.js";
import { getTerrain } from "./terrain.js";
import { getTree } from "./tree.js";


let width = window.innerWidth;
let height = window.innerHeight;

export let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

camera.position.z = 70;
camera.position.y = 50;
camera.lookAt (new THREE.Vector3(0,-2.14,0));


export let scene = new THREE.Scene();
let player = getPlayer();
player.position.y += 5;
scene.add(player);
scene.add(getTerrain());

//////////////////////////////////////////////////////////
let spotLight = new THREE.SpotLight(0xeeeece);
spotLight.position.set(1000, 1000, 1000);
scene.add(spotLight);

let spotLight2 = new THREE.SpotLight(0xeeeece);
spotLight2.position.set(-200, 200, 100);
scene.add(spotLight2);
///////////////////////////////////////////////////////////

let tree = getTree();
tree.map((el) => {
    scene.add(el);
});

///////////////////////////////////////////////////////////
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export function render()
{
    requestAnimationFrame(render);
    playerMoves(player, camera);
    renderer.render(scene, camera);
}