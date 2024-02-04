let puntuacion = 0;

const AS = 1;
const DOS = 2;
const TRES = 3;
const CUATRO = 4;
const CINCO = 5;
const SEIS = 6;
const SIETE = 7;
const SOTA = 10;
const CABALLO = 11;
const REY = 12;

const puntos = document.querySelector(".puntuacion") as HTMLElement;
const botonCarta = document.getElementById("pedir-carta") as HTMLButtonElement;
const botonPlantarse = document.getElementById(
  "me-planto"
) as HTMLButtonElement;
const mensajePlantarse = document.getElementById(
  "mensaje-me-planto"
) as HTMLElement;
const gameOver = document.getElementById("game-over") as HTMLElement;
const imagen = document.querySelector("img") as HTMLImageElement;

const muestraPuntuacion = () => {
  puntos.innerHTML = puntuacion.toString();
};
muestraPuntuacion();

const actualizarPuntuacion = (carta: number) => {
  if (carta >= 1 && carta <= 7) {
    puntuacion = puntuacion + carta;
  } else {
    puntuacion = puntuacion + 0.5;
  }
  muestraPuntuacion();
};

const pedirCarta = () => {
  let carta = Math.floor(Math.random() * 10) + 1;
  if (carta > 7) {
    carta = carta + 2;
  }

  muestraCarta(carta);
  actualizarPuntuacion(carta);

  if (puntuacion > 7.5) {
    botonCarta.disabled = true;
    botonPlantarse.disabled = true;
    gameOver.innerHTML = "GAME OVER!!!!!!!";
  }
};

botonCarta?.addEventListener("click", pedirCarta);

const muestraCarta = (carta: number): void => {
  switch (carta) {
    case AS:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      imagen.alt = "AS DE COPAS";
      break;
    case DOS:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      imagen.alt = "DOS DE COPAS";
      break;
    case TRES:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      imagen.alt = "TRES DE COPAS";
      break;
    case CUATRO:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      imagen.alt = "CUATRO DE COPAS";
      break;
    case CINCO:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      imagen.alt = "CINCO DE COPAS";
      break;
    case SEIS:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      imagen.alt = "SEIS DE COPAS";
      break;
    case SIETE:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      imagen.alt = "SIETE DE COPAS";
      break;
    case SOTA:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      imagen.alt = "SOTA DE COPAS";
      break;
    case CABALLO:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      imagen.alt = "CABALLO DE COPAS";
      break;
    case REY:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      imagen.alt = "REY DE COPAS";
      break;
  }
};

const plantarse = () => {
  botonCarta.disabled = true;

  switch (true) {
    case puntuacion <= 4:
      mensajePlantarse.innerHTML = "Has sido muy conservador!";
      break;
    case puntuacion > 4 && puntuacion < 6:
      mensajePlantarse.innerHTML = "Te ha entrado el canguelo eh?";
      break;
    case puntuacion >= 6 || puntuacion <= 7:
      mensajePlantarse.innerHTML = "Casi casi...";
      break;
    case puntuacion === 7.5:
      mensajePlantarse.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
    default:
      mensajePlantarse.innerHTML = "Ha habido un error con la puntuación";
      break;
  }
};

botonPlantarse.addEventListener("click", plantarse);
