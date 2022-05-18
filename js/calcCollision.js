import * as THREE from "../node_modules/three/build/three.module.js";
import { setCollisionObjects } from "./getCollisionObject.js";

export const calcCollision = (object, scene) => {
    const size = new THREE.Vector3()
    const box = new THREE.Box3().setFromObject(object).getSize(size)
    const valueCoordinates = [parseInt(box.x), parseInt(box.y), parseInt(box.z)]

    if(valueCoordinates[0] < 5) {
        valueCoordinates[0] = 5
    } else if(valueCoordinates[1] < 5) {
        valueCoordinates[1] = 5
    } else if(valueCoordinates[2] < 5) {
        valueCoordinates[2] = 5
    }
    
    const collisionBox = new THREE.BoxGeometry(valueCoordinates[0], valueCoordinates[1], valueCoordinates[2])
    const collisionMesh = new THREE.Mesh(collisionBox)
    collisionMesh.position.x = object.position.x
    collisionMesh.position.z = object.position.z
    collisionMesh.position.y += 5;
    collisionMesh.name = "collisionObject"
    collisionMesh.visible = false

    scene.add(collisionMesh)
    setCollisionObjects(scene);
}