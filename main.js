const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 360,
  height: 640,
  backgroundColor: '#222',
  scale: {
        mode: Phaser.Scale.FIT
    },
  scene: {
    preload,
     create
  }  
};

const game = new Phaser.Game(config);

let score = 0;
let square;
let personaje;

function preload(){
    this.load.image('player', '../img/personaje.png');

}

function create() {

  // creamos el personaje usando la imagen cargada
  personaje = this.add.image(200, 200, 'player');

  // hacerlo interactivo
  personaje.setInteractive();

  // ajustar tamaño
  personaje.setScale(0.3);

  personaje.on('pointerdown', () => {

    score++;
    document.getElementById("score").innerText = "Puntos: " + score;

    // mover personaje
    personaje.x = Phaser.Math.Between(50, 350);
    personaje.y = Phaser.Math.Between(50, 350);

    if(score === 10){
      document.getElementById("titulo").innerText = "¡Ganaste!";
    }

  });

}