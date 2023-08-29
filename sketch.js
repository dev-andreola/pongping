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

//START

function setup() {  
  createCanvas(600, 400);
}

function draw() {    
  background(20);
  mostraBolinha(); 
  movimentaBolinha();
  colisaoBolinhaBorda();
  mostraRaquete();  
  movimentaMinhaRaquete();
  //colisaoBolinhaRaquete();
  colisaoBolinhaRaqueteBiblioteca();
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
     xBolinha < diametroBolinha / 2){
    velxBolinha *= -1
  }
    
  if (yBolinha > height - raioBolinha ||
     yBolinha < diametroBolinha / 2){
    velyBolinha *= -1
  }
}

//RAQUETE

function mostraRaquete(){
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
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