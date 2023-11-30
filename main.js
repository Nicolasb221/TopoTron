const playButton = document.querySelector(".boton");
const contenedor = document.querySelector(".container");

const soundButton = document.getElementById("sonido");
const soundtrack = document.getElementById("soundtrack");

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");

let random = 0;
let score = 0;
let martillo = true;

let confirm11 = false;
let confirm12 = false;
let confirm13 = false;

let confirm21 = false;
let confirm22 = false;
let confirm23 = false;

let confirm31 = false;
let confirm32 = false;
let confirm33 = false;

function posicionTopoConNumeroRandom() {
  const elrand = document.querySelector(".container__pruebita");
  random = Math.floor(Math.random() * 9) + 1;
  elrand.textContent = `NUMERO: ${random}`;
  const pos11 = document.querySelector(".container__grid-gameplay-img-1-1");
  const pos12 = document.querySelector(".container__grid-gameplay-img-1-2");
  const pos13 = document.querySelector(".container__grid-gameplay-img-1-3");
  const pos21 = document.querySelector(".container__grid-gameplay-img-2-1");
  const pos22 = document.querySelector(".container__grid-gameplay-img-2-2");
  const pos23 = document.querySelector(".container__grid-gameplay-img-2-3");
  const pos31 = document.querySelector(".container__grid-gameplay-img-3-1");
  const pos32 = document.querySelector(".container__grid-gameplay-img-3-2");
  const pos33 = document.querySelector(".container__grid-gameplay-img-3-3");

  if (random == 1) {
    pos11.src = "topologo2.png";
    confirm11 = true;
  } else if (random == 2) {
    pos12.src = "topologo2.png";
    confirm12 = true;
  } else if (random == 3) {
    pos13.src = "topologo2.png";
    confirm13 = true;
  } else if (random == 4) {
    pos21.src = "topologo2.png";
    confirm21 = true;
  } else if (random == 5) {
    pos22.src = "topologo2.png";
    confirm22 = true;
  } else if (random == 6) {
    pos23.src = "topologo2.png";
    confirm23 = true;
  } else if (random == 7) {
    pos31.src = "topologo2.png";
    confirm31 = true;
  } else if (random == 8) {
    pos32.src = "topologo2.png";
    confirm32 = true;
  } else {
    pos33.src = "topologo2.png";
    confirm33 = true;
  }
}

let documentFragment = document.createDocumentFragment();

playButton.addEventListener("mouseover", () => {
    soundButton.play();
});
playButton.addEventListener("mouseout", () => {
    playButton.setTimeout(1000);
    soundButton.pause();
    soundButton.currentTime = 0;
});
playButton.addEventListener("click", juego);
function juego() {
  document.querySelector(".container__key-data").value = document.getElementById("usuario").value;
  const nicknameIngresado = document.querySelector(".container__key-data").value;
  const nicknameLongitud = nicknameIngresado.length;
  if (nicknameLongitud >= 4 && nicknameLongitud <= 8) {
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
    row4.style.display = "none";
    let i = 0;
    contenedor.style.gridTemplateAreas = 0;
    contenedor.style.gridTemplateColumns = "1fr 1fr 1fr";
    contenedor.style.gridTemplateRows = "25% 25% 25% 25%";

    const filas = contenedor.style.gridTemplateRows.split(" ").length;
    const columnas = contenedor.style.gridTemplateColumns.split(" ").length;
    for (let fila = 1; fila <= filas; fila++) {
      for (let columna = 1; columna <= columnas; columna++) {
        i++;
        if (fila !== 4) {
          let div = document.createElement("DIV");
          div.classList.add(`container__item-${fila}-${columna}`, "container__grid-gameplay");
          let nuevaImagen = document.createElement("IMG");
          nuevaImagen.src = "hole.png";
          nuevaImagen.classList.add(`container__grid-gameplay-img-${fila}-${columna}`,"container__grid-gameplay-holes");
          nuevaImagen.id = `imagen-${i}`;
          div.appendChild(nuevaImagen);
          documentFragment.appendChild(div);
        } else {
          if (columna == 1) {
            let div = document.createElement("DIV");
            div.classList.add(
              `container__item-${fila}-${columna}`,
              "container__grid-gameplay",
              "container__usuariogrid"
            );
            div.appendChild(
              document.createTextNode(
                `${document.querySelector(".container__key-data").value}`
              )
            );
            documentFragment.appendChild(div);
          } else if (columna == 2) {
            let div = document.createElement("DIV");
            div.classList.add(
              `container__item-${fila}-${columna}`,
              "container__grid-gameplay",
              "container__pruebita"
            );
            documentFragment.appendChild(div);
          } else {
            let div = document.createElement("DIV");
            div.classList.add(
              `container__item-${fila}-${columna}`,
              "container__grid-gameplay",
              "container__scoregrid"
            );
            div.appendChild(document.createTextNode(`SCORE: 0`));
            documentFragment.appendChild(div);
          }
        }
      }
    }
    contenedor.appendChild(documentFragment);
    const img1 = document.getElementById("imagen-1");
    const img2 = document.getElementById("imagen-2");
    const img3 = document.getElementById("imagen-3");
    const img4 = document.getElementById("imagen-4");
    const img5 = document.getElementById("imagen-5");
    const img6 = document.getElementById("imagen-6");
    const img7 = document.getElementById("imagen-7");
    const img8 = document.getElementById("imagen-8");
    const img9 = document.getElementById("imagen-9");

    img1.addEventListener("dblclick", dblclickEnCelda1);
    img2.addEventListener("dblclick", dblclickEnCelda2);
    img3.addEventListener("dblclick", dblclickEnCelda3);
    img4.addEventListener("dblclick", dblclickEnCelda4);
    img5.addEventListener("dblclick", dblclickEnCelda5);
    img6.addEventListener("dblclick", dblclickEnCelda6);
    img7.addEventListener("dblclick", dblclickEnCelda7);
    img8.addEventListener("dblclick", dblclickEnCelda8);
    img9.addEventListener("dblclick", dblclickEnCelda9);

    soundtrack.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });
    soundtrack.play();
    posicionTopoConNumeroRandom();
    setInterval(posicionTopoConNumeroRandom, 3000);
  }
}

function dblclickEnCelda1() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos11 = document.querySelector(".container__grid-gameplay-img-1-1");
  if (confirm11) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm11 = false;
    pos11.src = "hole.png";
  }
}
function dblclickEnCelda2() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos12 = document.querySelector(".container__grid-gameplay-img-1-2");
  if (confirm12) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm12 = false;
    pos12.src = "hole.png";
  }
}
function dblclickEnCelda3() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos13 = document.querySelector(".container__grid-gameplay-img-1-3");
  if (confirm13) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm13 = false;
    pos13.src = "hole.png";
  }
}
function dblclickEnCelda4() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos21 = document.querySelector(".container__grid-gameplay-img-2-1");
  if (confirm21) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm21 = false;
    pos21.src = "hole.png";
  }
}
function dblclickEnCelda5() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos22 = document.querySelector(".container__grid-gameplay-img-2-2");
  if (confirm22) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm22 = false;
    pos22.src = "hole.png";
  }
}
function dblclickEnCelda6() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos23 = document.querySelector(".container__grid-gameplay-img-2-3");
  if (confirm23) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm23 = false;
    pos23.src = "hole.png";
  }
}
function dblclickEnCelda7() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos31 = document.querySelector(".container__grid-gameplay-img-3-1");
  if (confirm31) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm31 = false;
    pos31.src = "hole.png";
  }
}
function dblclickEnCelda8() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos32 = document.querySelector(".container__grid-gameplay-img-3-2");
  if (confirm32) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm32 = false;
    pos32.src = "hole.png";
  }
}
function dblclickEnCelda9() {
  const scoreview = document.querySelector(".container__scoregrid");
  const pos33 = document.querySelector(".container__grid-gameplay-img-3-3");
  if (confirm33) {
    score += 10;
    scoreview.textContent = `Score: ${score}`;
    confirm33 = false;
    pos33.src = "hole.png";
  }
}