console.log('Flappy Birb');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const flappyBirb = {
  sx: 0,
  sY: 0,
  w: 33,
  h: 24,
  x: 10,
  y: 50,
  speed: 0,
  gravity: 0.25,
  update() {
    flappyBirb.speed = flappyBirb.speed + flappyBirb.gravity;
    flappyBirb.y = flappyBirb.y + flappyBirb.speed;
  },
  draw() {
    context.drawImage(
      sprites,
      flappyBirb.sx, flappyBirb.sY,
      flappyBirb.w, flappyBirb.h,
      flappyBirb.x, flappyBirb.y,
      flappyBirb.w, flappyBirb.h,
    );
  },
}

const floor = {
  sx: 0,
  sY: 610,
  w: 224,
  h: 112,
  x: 0,
  y: canvas.height - 112,
  draw() {
    context.drawImage(
      sprites,
      floor.sx, floor.sY,
      floor.w, floor.h,
      floor.x, floor.y,
      floor.w, floor.h,
    );

    context.drawImage(
      sprites,
      floor.sx, floor.sY,
      floor.w, floor.h,
      (floor.sx + floor.w), floor.y,
      floor.w, floor.h,
    );
  },
}

const background = {
  sX: 390,
  sY: 0,
  w: 275,
  h: 204,
  x: 0,
  y: canvas.height - 204,
  draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
      sprites,
      background.sX, background.sY,
      background.w, background.h,
      background.x, background.y,
      background.w, background.h,
    );

    context.drawImage(
      sprites,
      background.sX, background.sY,
      background.w, background.h,
      (background.x + background.w), background.y,
      background.w, background.h,
    );
  },
}

const getReayImage = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width / 2) - 174 / 2,
  y: 50,
  draw() {
    context.drawImage(
      sprites,
      getReayImage.sX, getReayImage.sY,
      getReayImage.w, getReayImage.h,
      getReayImage.x, getReayImage.y,
      getReayImage.w, getReayImage.h,
    );
  },
}

/**
 * [Screens]
 */

let activeScreen = {};
function changeToScreen(newScreen) {
  activeScreen = newScreen;
}

const Screens = {
  begin: {
    draw() {
      background.draw();
      floor.draw();
      flappyBirb.draw();
      getReayImage.draw();
    },
    click() {
      changeToScreen(Screens.game);
    },
    update() { }
  },
  game: {
    draw() {
      background.draw();
      floor.draw();
      flappyBirb.draw();
    },
    update() {
      flappyBirb.update();
    }
  }
}

function loop() {
  activeScreen.update();
  activeScreen.draw();
  requestAnimationFrame(loop);
}

window.addEventListener('click', function() {
  if (activeScreen.click){
    activeScreen.click();
  }
});

changeToScreen(Screens.begin);
loop();
