console.log('Flappy Birb');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const flappyBirb = {
  sx: 0,
  sy: 0,
  sWidth: 33,
  sHeight: 24,
  dx: 10,
  dy: 50,
  draw() {
    context.drawImage(
      sprites,
      flappyBirb.sx, flappyBirb.sy,
      flappyBirb.sWidth, flappyBirb.sHeight,
      flappyBirb.dx, flappyBirb.dy,
      flappyBirb.sWidth, flappyBirb.sHeight,
    );
  },
}

const floor = {
  sx: 0,
  sy: 610,
  sWidth: 224,
  sHeight: 112,
  dx: 0,
  dy: canvas.height - 112,
  draw() {
    context.drawImage(
      sprites,
      floor.sx, floor.sy,
      floor.sWidth, floor.sHeight,
      floor.dx, floor.dy,
      floor.sWidth, floor.sHeight,
    );

    context.drawImage(
      sprites,
      floor.sx, floor.sy,
      floor.sWidth, floor.sHeight,
      (floor.sx + floor.sWidth), floor.dy,
      floor.sWidth, floor.sHeight,
    );
  },
}

const background = {
  sx: 390,
  sy: 0,
  sWidth: 275,
  sHeight: 204,
  dx: 0,
  dy: canvas.height - 204,
  draw() {
    context.fillStyle= '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
      sprites,
      background.sx, background.sy,
      background.sWidth, background.sHeight,
      background.dx, background.dy,
      background.sWidth, background.sHeight,
    );

    context.drawImage(
      sprites,
      background.sx, background.sy,
      background.sWidth, background.sHeight,
      (background.sx + background.sWidth), background.dy,
      background.sWidth, background.sHeight,
    );
  },
}





function loop() {
  background.draw();
  floor.draw();
  flappyBirb.draw();
  
  requestAnimationFrame(loop);
}

loop();
