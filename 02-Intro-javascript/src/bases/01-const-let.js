
// Variables y Constantes

// No utilizar var
const nombre = 'Ignacio'
const apellido = 'Molina'

let valorDado = 5
valorDado = 4


if ( true ) {
  // Variables de scope, el valorDado solo existe dentro de este if
  let valorDado = 6
  const nombre = 'Fernando'
  const apellido = 'Palominos'

  console.log(valorDado, nombre, apellido);
}

console.log(valorDado, nombre, apellido);

