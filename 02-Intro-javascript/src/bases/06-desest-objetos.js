// Desestructuración de Objetos en Js
// Asignación Desestructurante

const persona = {
  nombre: 'Ignacio',
  edad: 31,
  clave: 'Strocs',
  rango: 'Architect'
}

//extraigo:asigno
const {nombre:nombre2, clave, edad} = persona

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

console.log(nombre2);
console.log(edad);
console.log(clave);

//desestructuración en argumento
//se puede asignar un valor al argumento para que lo use en caso de que no exista en el objeto
const noSirveUseContext = ({nombre, edad, clave, rango = 'Developer'}) => {

  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 92.314,
      lng: 92.123,
    }

  }
}

const {nombreClave, anios, latlng:{lat, lng}} = noSirveUseContext(persona)

console.log(nombreClave, anios);
console.log(lat, lng);

