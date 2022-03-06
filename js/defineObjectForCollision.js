export function defineObjectForCollision(object, arrayObjects, collision)
{
    if(arrayObjects.length != 0)
    {
        let collisionObject = arrayObjects[0];
        let distance = getDistance(object, arrayObjects[0]);
        let currentDistance;
        for (let i = 1; i < arrayObjects.length; ++i)
        {
            currentDistance = getDistance(object, arrayObjects[i]);
            if (currentDistance < distance)
            {
                distance = currentDistance;
                collisionObject = arrayObjects[i]
            }
        }
        
        collision(object, collisionObject);
    }
}

function getDistance(object1, object2)
{
    return Math.abs(object1.position.x - object2.position.x) + Math.abs(object1.position.z - object2.position.z);
}