import * as THREE from "../node_modules/three/build/three.module.js";
import { setCollisionObjects } from "./getCollisionObject.js";

export const calcCollision = (object, scene) => {
    const size = new THREE.Vector3()
    const box = new THREE.Box3().setFromObject(object).getSize(size)
    
    const collisionBox = new THREE.BoxGeometry(parseInt(box.x), parseInt(box.y), parseInt(box.z) * 2)
    const collisionMesh = new THREE.Mesh(collisionBox)
    collisionMesh.position.x = object.position.x
    collisionMesh.position.z = object.position.z
    collisionMesh.position.y += 5;
    collisionMesh.name = "collisionObject"
    collisionMesh.visible = false

    scene.add(collisionMesh)
    setCollisionObjects(scene);
}