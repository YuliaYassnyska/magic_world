import * as THREE from "../node_modules/three/build/three.module.js";


let geometry = new THREE.PlaneGeometry(100, 100, 12, 12);
let material = new THREE.MeshPhongMaterial({color: 0x00ff00, specular: 0x111111});
let terrain = new THREE.Mesh(geometry, material);
terrain.rotation.x = -Math.PI / 2;
terrain.position.y = 0;


export const getTerrain = () => {
    return terrain;
}