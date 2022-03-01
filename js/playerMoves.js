let PressBack = 0;
let PressForward = 0;
let PressLeft = 0;
let PressRight = 0;

document.onkeydown = (event) =>{
  if (event.key == "a"){
    PressLeft = 1;
  }
  if (event.key == "w"){
    PressForward = 1;
  }
  if (event.key == "d"){
    PressRight = 1;
  }
  if (event.key == "s"){
    PressBack = 1;
  }
}

document.onkeyup = (event) =>{
  if (event.key == "a"){
    PressLeft = 0;
  }
  if (event.key == "w"){
    PressForward = 0;
  }
  if (event.key == "d"){
    PressRight = 0;
  }
  if (event.key == "s"){
    PressBack = 0;
  }
}

export const playerMoves = (player, camera) => {
    camera.position.x += (PressRight - PressLeft) * 0.5;
    camera.position.z += (PressBack - PressForward) * 0.5;
    player.position.x = camera.position.x;
    player.position.z = camera.position.z - 70;
}