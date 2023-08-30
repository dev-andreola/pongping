//BOLINHA
let xBolinha = 300;
let yBolinha = 200;

let diametroBolinha = 22;
let raioBolinha = diametroBolinha / 2;

let velxBolinha = 6;
let velyBolinha = 6;

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

// PLACAR
meusPontos = 0;
pontosOponente = 0;


//START
function setup() {  
  createCanvas(600, 400);
}

function draw() {    
  background(50);
  mostraBolinha(); 
  movimentaBolinha();
  colisaoBolinhaBorda();
  mostraRaquete(xRaquete, yRaquete);  
  movimentaMinhaRaquete();
  colisaoBolinhaRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoBolinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
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

  yRaquete = constrain(yRaquete, 4, 305)
}



function colisaoBolinhaRaquete(x, y){
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametroBolinha);
  if (colidiu) {
    velxBolinha *= -1;
  }
}

//RAQUETE OPONENTE
function movimentaRaqueteOponente(){
  velyOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velyOponente

  yRaqueteOponente = constrain(yRaqueteOponente, 4, 305)
}

//PONTUAÇÃO
function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26)
}


function marcaPonto() {
  if (xBolinha > 590){
    meusPontos++
  }
  if (xBolinha < 10){
    pontosOponente++
  }
}