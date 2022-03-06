let collisionObjects = [];

export function setCollisionObjects(scene)
{
    scene.children.map((el) => {
        if (el.name == "collisionObject")
            collisionObjects.push(el);
    });
}

export function getCollisionObjects()
{
    return collisionObjects;
}