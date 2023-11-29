const play = document.querySelector(".boton");
const sonido = document.getElementById('sonido');
const soundtrack = document.getElementById('soundtrack');

const inputUser = document.getElementById("usuario").value;
const row1 =document.getElementById("row1");
const row2 =document.getElementById("row2");
const row3 =document.getElementById("row3");
const row4 = document.getElementById("row4");
const longitud = inputUser.length;
const contenedor = document.querySelector(".grid-container");
const contenedor2 = document.querySelector(".grid-container2");
// item-1-1
function topacio(){
    const elrand = document.querySelector(".pruebita");
    var random =Math.floor(Math.random() * 9) + 1;
    elrand.textContent=`NUMERO: ${random}`;
    const pos11 = document.querySelector(".img-1-1");
    const pos12 = document.querySelector(".img-1-2");
    const pos13 = document.querySelector(".img-1-3");
    const pos21 = document.querySelector(".img-2-1");
    const pos22 = document.querySelector(".img-2-2");
    const pos23 = document.querySelector(".img-2-3");
    const pos31 = document.querySelector(".img-3-1");
    const pos32 = document.querySelector(".img-3-2");
    const pos33 = document.querySelector(".img-3-3");
    if(random==1){
        pos11.src = 'topologo2.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==2){
        pos11.src = 'hole.png';
        pos12.src = 'topologo2.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==3){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'topologo2.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==4){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'topologo2.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==5){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'topologo2.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==6){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'topologo2.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==7){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'topologo2.png';
        pos32.src = 'hole.png';
        pos33.src = 'hole.png';
    }else if(random==8){
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'topologo2.png';
        pos33.src = 'hole.png';
    }else{
        pos11.src = 'hole.png';
        pos12.src = 'hole.png';
        pos13.src = 'hole.png';
        pos21.src = 'hole.png';
        pos22.src = 'hole.png';
        pos23.src = 'hole.png';
        pos31.src = 'hole.png';
        pos32.src = 'hole.png';
        pos33.src = 'topologo2.png';
    }
}

let documentFragment = document.createDocumentFragment();

play.addEventListener('mouseover', () => {
    sonido.play();
});
play.addEventListener('mouseout', () => {
    play.setTimeout(1000);
    sonido.pause();
    sonido.currentTime = 0; // Reiniciar la reproducción al inicio del audio

});
play.addEventListener("click",()=>{
    document.querySelector(".key-data").value = document.getElementById("usuario").value
    const vr = document.querySelector(".key-data").value
    const longitud = vr.length;
    if(longitud>=4 && longitud<=8){
        row1.style.display="none";
        row2.style.display="none";
        row3.style.display="none";
        row4.style.display="none";
        contenedor.style.gridTemplateAreas= 0;
        contenedor.style.gridTemplateColumns = '1fr 1fr 1fr';
        contenedor.style.gridTemplateRows = '25% 25% 25% 25%';
        const filas = contenedor.style.gridTemplateRows.split(" ").length;
        const columnas = contenedor.style.gridTemplateColumns.split(" ").length;
        for (let fila = 1; fila <= filas; fila++) {
            for (let columna = 1; columna <= columnas; columna++) {
            //   alert(`fila: ${fila} y columna: ${columna}`)
                if (fila !== 4){
                    let div = document.createElement("DIV");
                    div.classList.add(`item-${fila}-${columna}`,'grid-item2');
                    let nuevaImagen = document.createElement('IMG');
                    nuevaImagen.src = 'hole.png';
                    nuevaImagen.classList.add(`img-${fila}-${columna}`,'grid-item-img','holes');
                    div.appendChild(nuevaImagen);
                    documentFragment.appendChild(div);
                }else{
                    if(columna==1){
                        let div = document.createElement("DIV");
                        div.classList.add(`item-${fila}-${columna}`,'grid-item2','usuariogrid');
                        div.appendChild(document.createTextNode(`${document.querySelector(".key-data").value}`));
                        documentFragment.appendChild(div);
                    }else if(columna==2){
                        let div = document.createElement("DIV");
                        div.classList.add(`item-${fila}-${columna}`,'grid-item2', 'pruebita');
                        documentFragment.appendChild(div);
                    }else{
                        let div = document.createElement("DIV");
                        div.classList.add(`item-${fila}-${columna}`,'grid-item2','scoregrid');
                        div.appendChild(document.createTextNode(`SCORE: 0`));
                        documentFragment.appendChild(div);
                    }
                }

            }
          }
        contenedor.appendChild(documentFragment);
        soundtrack.addEventListener('ended', function() {
            this.currentTime = 0; // Reiniciar la reproducción al inicio del audio
            this.play();
          });
        soundtrack.play();
        topacio();
        const intervalo = setInterval(topacio, 3000);


    }
});


