//BOLINHA

let xBolinha = 300;
let yBolinha = 200;

let diametroBolinha = 22;
let raioBolinha = diametroBolinha / 2;

let velxBolinha = 5;
let velyBolinha = 2;

//RAQUETE

let colidiu = false;

let xRaquete = 10;
let yRaquete = 155;
let alturaRaquete = 90;
let larguraRaquete = 10;

// RAQUETE OPONENTE

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velyOponente;


//START

function setup() {  
  createCanvas(600, 400);
}

function draw() {    
  background(20);
  mostraBolinha(); 
  movimentaBolinha();
  colisaoBolinhaBorda();
  mostraRaquete(xRaquete, yRaquete);  
  movimentaMinhaRaquete();
  //colisaoBolinhaRaquete();
  colisaoBolinhaRaqueteBiblioteca();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
}

//BOLINHA

function mostraBolinha () {
  circle(xBolinha, yBolinha, diametroBolinha);
}


function movimentaBolinha () {
  xBolinha += velxBolinha;
  yBolinha += velyBolinha;
}


function colisaoBolinhaBorda () {
  if (xBolinha > width - raioBolinha ||
     xBolinha < raioBolinha){
    velxBolinha *= -1
  }
    
  if (yBolinha > height - raioBolinha ||
     yBolinha < raioBolinha){
    velyBolinha *= -1
  }
}

//RAQUETE

function mostraRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoBolinhaRaquete(){
  if (xBolinha - raioBolinha < xRaquete + larguraRaquete &&
     yBolinha - raioBolinha < yRaquete + alturaRaquete &&
     yBolinha + raioBolinha > yRaquete){
    velxBolinha *= -1;
  }
}

function colisaoBolinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametroBolinha);
  if (colidiu) {
    velxBolinha *= -1;
  }
}

//RAQUETE OPONENTE

function movimentaRaqueteOponente(){
  velyOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velyOponente
}
