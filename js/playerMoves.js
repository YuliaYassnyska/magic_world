export const playerMoves = (camera) => {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 39:
            camera.position.x += 0.1;
        break;
        case 38:
            camera.position.z -= 0.1;
        break;
        case 37:
            camera.position.x -= 0.1;
        break;
        case 40:
            camera.position.z += 0.1;
        break;
      }
    };
  }