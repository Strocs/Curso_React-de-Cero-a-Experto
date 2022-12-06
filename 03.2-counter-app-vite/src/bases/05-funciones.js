
//Funciones en JS

////asignar constantes a las funciones
const saludar = function (nombre) {
  return `Hola ${nombre}`
}
////funciones de flecha, o lamda
const saludar2 = (nombre) => {
  return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`

const saludar4 = () => `Hola Mundo`

// console.log(saludar('Ignacio'));
// console.log(saludar('ignacio'));
// console.log(saludar2('andres'));
// console.log(saludar3('fernando'));
// console.log(saludar4());

////para retornar un objeto o cualquier valor complejo
//// se pone entre (objeto implicito)
export const getUser = () => ({
    uid: 'ABC123',
    user: 'Strocs'
})

const user = getUser()
// console.log(user);



//Tarea
// 1. Transformar a función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
export function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC834',
    user: nombre,
  }
}

const usuarioActivo = getUsuarioActivo('Ignacio')
// console.log(usuarioActivo);

//Respuesta
const getUsuarioActivo2 = (nombre) => ({
  uid: 'ABC842', 
  user: nombre
})

const usuarioActivo2 = getUsuarioActivo2('Andrés')
// console.log(usuarioActivo2);




