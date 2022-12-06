// Template String

const nombre = 'Ignacio'
const apellido = 'Molina'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `
${nombre}
${apellido}
${ 1+1 }`

console.log(nombreCompleto)

export function getSaludo(nombre) {
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo( nombre )}`);