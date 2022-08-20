const nombre = "Jose Manuel";
const apellido = "Sanchez Juarez";

const nombreCompleto =`${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludos(nombre) {
    return `hola ${nombre}`
}

console.log(`Esto es un texto: ${getSaludos(nombre)}`);