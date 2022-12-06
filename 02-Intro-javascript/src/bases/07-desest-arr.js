//Desustructuración de arreglos

const personajes = ['Ignacio', 'Carla', 'Andres']

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
const [ , p2, p3 ] = personajes
console.log(p2, p3);


const retornaArreglo = () => {
  return ['abc', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

//Tarea
//1. El Primer valor del arr se llamará nombre
//2. El segundo setNombre
const noUseState = (valor) => {
  return [valor, ()=>(console.log('Hola Mundo')
  )]
} 

const [nombre, setNombre] = noUseState('Goku')

console.log(nombre);
// arr[1]()
setNombre()
