import * as THREE from "../node_modules/three/build/three.module.js"

let tree = [];

let stem = new THREE.Mesh(
    new THREE.BoxGeometry(3, 15, 3),
    new THREE.MeshPhongMaterial({
        color: 0x80501d,
        specular: 0x111111
    })
);

let leaf = new THREE.Mesh(
    new THREE.SphereGeometry(10, 8, 8),
    new THREE.MeshPhongMaterial({
        color: 0x11cf4a,
        specular: 0x111111
    })
);

function createTree()
{
    stem.position.x = 30;
    stem.position.y = 15/2;
    stem.position.z = -30;
    leaf.position.x = 30;
    leaf.position.y = 20;
    leaf.position.z = -30;

    tree.push(stem, leaf);
}

export function getTree()
{
    createTree();
    return tree;
}