const LARGURA = 677;
const ALTURA = 420;

let xCarros = [LARGURA, LARGURA, LARGURA, LARGURA, LARGURA, LARGURA];
let yCarros = [45, 105, 160, 220, 275, 335];
let velCarros = [2, 4, 3, 3.5, 4, 2];

let xAtor = LARGURA / 5;
let yAtor = ALTURA - 35;

const compCar = 60, altCar = 40;
const compAtor = 35, altAtor = 35;

let vidas = 15;
let pontos = 0;

let xAtorInicial, yAtorInicial;
let pauseUntil = 0;

let pista, car1, car2, car3, ator;

function preload() {
  pista = loadImage("img/road.png");
  car1 = loadImage("img/car1.png");
  car2 = loadImage("img/car2.png");
  car3 = loadImage("img/car3.png");
  ator = loadImage("img/ator.png");
}

function setup() {
  createCanvas(LARGURA, ALTURA);
  xAtorInicial = xAtor;
  yAtorInicial = yAtor;
}

function draw() {
  background(pista);

  mostrarCarros();
  mostrarAtor();
  moverCarros();
  moverAtor();
  verificarColisao();
  mostrarPontosEVidas();
  verificarChegada();
}

function mostrarCarros() {
  // Carros da esquerda (indo para a esquerda)
  image(car1, xCarros[0], yCarros[0], compCar, altCar);
  image(car2, xCarros[1], yCarros[1], compCar, altCar);
  image(car3, xCarros[2], yCarros[2], compCar, altCar);

  // Carros da direita (indo para a direita) - invertidos
  push();
  translate(xCarros[3] + compCar, yCarros[3]);
  scale(-1, 1);
  image(car2, 0, 0, compCar, altCar);
  pop();

  push();
  translate(xCarros[4] + compCar, yCarros[4]);
  scale(-1, 1);
  image(car3, 0, 0, compCar, altCar);
  pop();

  image(car1, xCarros[5], yCarros[5], compCar, altCar);
}

function mostrarAtor() {
  image(ator, xAtor, yAtor, compAtor, altAtor);
}

function moverCarros() {
  // Carros indo para esquerda
  for (let i = 0; i < 3; i++) {
    xCarros[i] -= velCarros[i];
    if (xCarros[i] < -compCar) xCarros[i] = LARGURA;
  }

  // Carros indo para direita
  for (let i = 3; i < 6; i++) {
    xCarros[i] += velCarros[i];
    if (xCarros[i] > LARGURA) xCarros[i] = -compCar;
  }
}

function moverAtor() {
  if (vidas <= 0 || millis() < pauseUntil) return;

  if (keyIsDown(UP_ARROW) && yAtor > 0) yAtor -= 5;
  if (keyIsDown(DOWN_ARROW) && yAtor < ALTURA - altAtor) yAtor += 5;
  if (keyIsDown(LEFT_ARROW) && xAtor > 0) xAtor -= 5;
  if (keyIsDown(RIGHT_ARROW) && xAtor < LARGURA - compAtor) xAtor += 5;
}

function verificarColisao() {
  if (vidas <= 0 || millis() < pauseUntil) return;

  for (let i = 0; i < 6; i++) {
    if (collideRectRect(
      xAtor, yAtor, compAtor, altAtor,
      xCarros[i], yCarros[i], compCar, altCar
    )) {
      vidas--;
      resetAtor();
      pauseUntil = millis() + 1000;
      break;
    }
  }
}

function resetAtor() {
  xAtor = xAtorInicial;
  yAtor = yAtorInicial;
}

function verificarChegada() {
  if (yAtor < 1) {
    pontos++;
    resetAtor();
    pauseUntil = millis() + 800;
  }
}

function mostrarPontosEVidas() {
  textSize(22);
  fill("#FF4500");
  textAlign(LEFT, TOP);
  text(`Pontos: ${pontos}`, 20, 15);
  text(`Vidas: ${vidas}`, LARGURA - 140, 15);

  if (vidas <= 0) {
    textSize(60);
    fill("red");
    textAlign(CENTER, CENTER);
    text("GAME OVER", LARGURA/2, ALTURA/2);
  }
}