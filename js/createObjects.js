import * as THREE from "../node_modules/three/build/three.module.js";

let objects = []

let geometry = new THREE.BoxGeometry(10,10,10)
let material = new THREE.MeshBasicMaterial({color: 0xff0000})
let cube = new THREE.Mesh(geometry, material)
objects.push(cube)

export function getObjects() {
    return objects
}