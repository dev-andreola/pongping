//BOLINHA
let xBolinha = 300;
let yBolinha = 200;

let diametroBolinha = 22;
let raioBolinha = diametroBolinha / 2;

let velxBolinha = 6;
let velyBolinha = 5;

//RAQUETE
let colidiu = false;

let xRaquete = 5;
let yRaquete = 155;
let alturaRaquete = 90;
let larguraRaquete = 10;

// RAQUETE OPONENTE
let xRaqueteOponente = 595;
let yRaqueteOponente = 150;
let velyOponente;

// PLACAR
meusPontos = 0;
pontosOponente = 0;

//SONS
let ponto;
let raquetada;
let trilha;

function preload() {
  trilha = loadSound("pongping.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//START
function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  background(50);
  mostraBolinha();
  movimentaBolinha();
  colisaoBolinhaBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete(); // W e S
  colisaoBolinhaRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente(); // UPP ARROW e DOWN ARROW
  colisaoBolinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

//BOLINHA
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
  xBolinha += velxBolinha;
  yBolinha += velyBolinha;
}

function colisaoBolinhaBorda() {
  if (xBolinha > width - raioBolinha || xBolinha < raioBolinha) {
    velxBolinha *= -1;
  }

  if (yBolinha > height - raioBolinha || yBolinha < raioBolinha) {
    velyBolinha *= -1;
  }
}

//RAQUETE
function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }

  yRaquete = constrain(yRaquete, 4, 305);
}

function colisaoBolinhaRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    larguraRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    diametroBolinha
  );
  if (colidiu) {
    velxBolinha *= -1;
    raquetada.play();
  }
}

//RAQUETE OPONENTE
// function movimentaRaqueteOponente(){
//   velyOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
//   yRaqueteOponente += velyOponente

//   yRaqueteOponente = constrain(yRaqueteOponente, 4, 305)
// }

function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }

  yRaqueteOponente = constrain(yRaqueteOponente, 4, 305);
}

//PONTUAÇÃO
function incluiPlacar() {
  //stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(100);
  rect(450, 10, 40, 20);
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos++;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente++;
    ponto.play();
  }
}
