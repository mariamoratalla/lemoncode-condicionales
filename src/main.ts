let puntuacion = 0;

const muestraPuntuacion = () => {
  const puntos = document.querySelector(".puntuacion") as HTMLElement;
  puntos.innerHTML = puntuacion.toString();
};

muestraPuntuacion();

const pedirCarta = () => {
  let carta = Math.floor(Math.random() * 10) + 1;

  if (carta > 7) {
    carta = carta + 2;
  }

  return muestraCarta(carta), console.log(carta);
};

const botonCarta = document.getElementById("pedir-carta");
botonCarta?.addEventListener("click", pedirCarta);

const muestraCarta = (carta: number): void => {
  let imagen = document.querySelector("img") as HTMLImageElement;

  switch (carta) {
    case 1:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }
};
