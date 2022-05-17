import * as THREE from "../node_modules/three/build/three.module.js";

function getTerrain(posX, posZ)
{
    let terrain = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 12, 12),
        new THREE.MeshPhongMaterial({color: 0x00ff00, specular: 0x111111})
    );
    terrain.rotation.x = -Math.PI / 2;
    terrain.position.set(posX, 0, posZ);
    terrain.name = "terrain";
    return terrain;
}

let terrain = getTerrain(0, 0);
let tempTerrain = getTerrain(0, 0);
let terrainIsChanged = true;

export function generateTerrainOnScene(scene, player)
{
    if (terrainIsChanged)
    {
        scene.add(terrain);
        terrainIsChanged = false;
    }

    changeTerrain(scene, player);
}

function getRoundingPosition(position, epsilon)
{
    return parseInt(position / epsilon) * epsilon;
}

function changeTerrain(scene, player)
{
    if (Math.abs(player.position.x % 100) > 35 && Math.abs(player.position.x % 100) < 36)
    {
        let allTerrains = scene.children.filter(el => el.name == "terrain");
        tempTerrain.position.set(parseInt(player.position.x / 100) * 100 + 100, 0, parseInt(player.position.z / 100) * 100);
        let terrainWasAdded = true;
        allTerrains.map(terrain => {
            if (tempTerrain.position.x == terrain.position.x && tempTerrain.position.z == terrain.position.z)
            terrainWasAdded = false;
        });
        if(terrainWasAdded)
        {
            terrain = getTerrain(parseInt(player.position.x / 100) * 100 + 100, parseInt(player.position.z / 100) * 100);
            terrainIsChanged = true;
        }
    }
}

