import * as THREE from "../node_modules/three/build/three.module.js";
import { FBXLoader } from "../node_modules/three/examples/jsm/loaders/FBXLoader.js"
import { calcCollision } from "./calcCollision.js";


export const loader = (scene) => {
    const loader = new FBXLoader();
    loader.load('../models/player.fbx', function (object) {

        object.traverse( function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        } );
        object.scale.set(0.06, 0.06, 0.06)
        object.position.x = -10
        object.position.z = 15

        calcCollision(object, scene)

        scene.add(object)
    })
}
