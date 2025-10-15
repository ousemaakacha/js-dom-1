console.log("lampadina");

const img = document.getElementById("myImage");
const img2 = document.getElementById("myImage2");
const btnEl = document.getElementById("btnSW");
const btnEl2 = document.getElementById("btnSW2");

// creo funzione per sostutuire le immagini al click del bottone

function toggleLamp() {
  img.classList.toggle("d-none");
  img2.classList.toggle("d-none");
  btnEl.classList.toggle("d-none");
  btnEl2.classList.toggle("d-none");
}

// aggiungo event listener
btnEl.addEventListener("click", toggleLamp);
btnEl2.addEventListener("click", toggleLamp);
