import * as THREE from "../node_modules/three/build/three.module.js";


let geometry = new THREE.PlaneGeometry(100, 100, 12, 12);
let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
let terrain = new THREE.Mesh(geometry, material);
terrain.rotation.x = Math.PI / 2;
terrain.position.y = -20;


export const getTerrain = () => {
    return terrain;
}