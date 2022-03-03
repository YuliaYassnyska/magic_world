export function collision(player, object)
{
    if ((player.position.x + player.geometry.parameters.width / 2)  >= (object.position.x - object.geometry.parameters.width / 2) &&
        player.position.z  <= (object.position.z + object.geometry.parameters.depth / 2) &&
        player.position.z  >= (object.position.z - object.geometry.parameters.depth / 2))
    {
        if (player.position.x  <= (object.position.x + object.geometry.parameters.width / 2))
        {
            player.position.x += -0.5;
        }
    }
    if ((player.position.x - player.geometry.parameters.width / 2)  <= (object.position.x + object.geometry.parameters.width / 2) &&
        player.position.z  <= (object.position.z + object.geometry.parameters.depth / 2) &&
        player.position.z  >= (object.position.z - object.geometry.parameters.depth / 2))
    {
        if (player.position.x  >= (object.position.x - object.geometry.parameters.width / 2))
        {
            player.position.x += 0.5;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    if ((player.position.z + player.geometry.parameters.depth / 2)  >= (object.position.z - object.geometry.parameters.depth / 2) &&
        (player.position.x - player.geometry.parameters.width / 2) <= (object.position.x + object.geometry.parameters.width / 2) &&
        (player.position.x + player.geometry.parameters.width / 2)  >= (object.position.x - object.geometry.parameters.width / 2))
    {
        if (player.position.z  <= (object.position.z + object.geometry.parameters.width / 2))
        {
            player.position.z += -0.5;
        }
    }
    if ((player.position.z - player.geometry.parameters.depth / 2)  <= (object.position.z + object.geometry.parameters.depth / 2) &&
        (player.position.x - player.geometry.parameters.width / 2) <= (object.position.x + object.geometry.parameters.width / 2) &&
        (player.position.x + player.geometry.parameters.width / 2)  >= (object.position.x - object.geometry.parameters.width / 2))
    {
        if (player.position.z  >= (object.position.z - object.geometry.parameters.width / 2))
        {
            player.position.z += 0.5;
        }
    }
}