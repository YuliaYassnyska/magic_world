import * as THREE from "../node_modules/three/build/three.module.js";

let geometry = new THREE.BoxGeometry(5,10,5)
let material = new THREE.MeshPhongMaterial({color: 0xff0000, specular: 0x111111})
let player = new THREE.Mesh(geometry, material)

export const getPlayer = () => {
    return player;
}