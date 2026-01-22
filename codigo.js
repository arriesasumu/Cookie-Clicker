let contador = 0;
const imagen = document.getElementById('imagen');
const boton = document.getElementById('boton');
const spanContador = document.getElementById('contador');

// Array de imágenes para cambiar al hacer click
const imagenes = [
    'https://via.placeholder.com/200x200/FF0000/FFFFFF?text=Click+1',
    'https://via.placeholder.com/200x200/00FF00/FFFFFF?text=Click+2',
    'https://via.placeholder.com/200x200/0000FF/FFFFFF?text=Click+3',
    'https://via.placeholder.com/200x200/FFFF00/FFFFFF?text=Click+4',
    'https://via.placeholder.com/200x200/FF00FF/FFFFFF?text=Click+5'
];

let clikcs = 0;
let clikcsbase = 1;

function juego() {
    clikcs += clikcsbase;
    renderizarcliks();
}

function mejorarclikcs() {
    if (clikcs >= 10) {
        clikcsbase += 1;
        clikcs -= 10;
    }
    renderizarcliks();
}

function renderizarcliks() {
    document.getElementById("resultadoDisplay").innerText = clikcs;
}

boton.addEventListener('click', () => {
    contador++;
    spanContador.textContent = contador;
    // Cambia la imagen cada 5 clicks
    const indiceImagen = (contador - 1) % imagenes.length;
    imagen.src = imagenes[indiceImagen];
});