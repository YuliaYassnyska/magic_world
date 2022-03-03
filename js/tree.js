import * as THREE from "../node_modules/three/build/three.module.js"

export class Tree
{
    constructor(posX, posZ)
    {
        this.tree = [];
        this.stem = new THREE.Mesh(
            new THREE.BoxGeometry(3, 10, 3),
            new THREE.MeshPhongMaterial({
                color: 0x80501d,
                specular: 0x111111
            })
        );
        this.leaf = new THREE.Mesh(
            new THREE.SphereGeometry(10, 8, 8),
            new THREE.MeshPhongMaterial({
                color: 0x11cf4a,
                specular: 0x111111
            })
        );

        this.stem.position.set(posX, this.stem.geometry.parameters.height / 2, posZ);
        this.leaf.position.set(posX, this.stem.geometry.parameters.height + this.leaf.geometry.parameters.radius, posZ);

        this.tree.push(this.stem, this.leaf);
    }

    getTree()
    {
        return this.tree;
    }
}