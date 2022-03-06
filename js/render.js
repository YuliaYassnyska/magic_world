import * as THREE from "../node_modules/three/build/three.module.js";
import { getPlayer } from "./player.js";
import { playerMoves } from "./playerMoves.js";
import { generateTerrainOnScene } from "./terrain.js";
import { Tree } from "./tree.js";
import { collision } from "./collision.js"
import { defineObjectForCollision } from "./defineObjectForCollision.js"
import { getCollisionObjects, setCollisionObjects } from "./getCollisionObject.js"


let width = window.innerWidth;
let height = window.innerHeight;

//////////////////////////////////////////////////////////   Create and set camera
export let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.set(0, 50, 70);
camera.lookAt (new THREE.Vector3(0,-2.14,0));

////////////////////////////////////////////////////////// Create scene

export let scene = new THREE.Scene();

let player = getPlayer();
player.position.y += 5;
scene.add(player);

//////////////////////////////////////////////////////////
let spotLight = new THREE.SpotLight(0xeeeece);
spotLight.position.set(1000, 1000, 1000);
scene.add(spotLight);

let spotLight2 = new THREE.SpotLight(0xeeeece);
spotLight2.position.set(-200, 200, 100);
scene.add(spotLight2);
///////////////////////////////////////////////////////////

new Tree(-30, 30).getTree().map((el) => {
    scene.add(el);
});

new Tree(30, -20).getTree().map((el) => {
    scene.add(el);
});

new Tree(10, -10).getTree().map((el) => {
    scene.add(el);
});

///////////////////////////////////////////////////////////
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
////////////////////////////////////////////////////////////

setCollisionObjects(scene);

export function render()
{
    requestAnimationFrame(render);
    playerMoves(player, camera);
    generateTerrainOnScene(scene, player);
    defineObjectForCollision(player, getCollisionObjects(), collision)
    renderer.render(scene, camera);
}