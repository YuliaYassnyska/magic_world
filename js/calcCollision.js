import * as THREE from "../node_modules/three/build/three.module.js";

export const calcCollision = (object, scene) => {
    const size = new THREE.Vector3()
    const box = new THREE.Box3().setFromObject(object).getSize(size)
    
    const collisionBox = new THREE.BoxGeometry(box.x, box.y, box.z)
    const collisionMesh = new THREE.Mesh(collisionBox)
    collisionMesh.position.x = object.position.x
    collisionMesh.position.z = object.position.z
    collisionMesh.position.y += 5;
    collisionMesh.name = "collisionObject"
    console.log(collisionMesh.type)

    scene.add(collisionMesh)
}