console.log("lampadina");

const img = document.getElementById("myImage");
const img2 = document.getElementById("myImage2");
const btnEl = document.getElementById("btnSW");

// creo funzione per sostutuire le immagini al click del bottone

function toggleLamp() {
  img.classList.toggle("d-none");
  img2.classList.toggle("d-none");
}
