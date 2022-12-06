//Arreglos en JS

////Se puede crear un arreglo con new array que basicamente
////crea una arreglo de n posiciones vacias, al agregar un push
////se agrega después de las n posiciones del array
// const arreglo = new Array( 100 )
// arreglo.push(1)


const arreglo = [1,2,3,4]
//No utilizar el push :0
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

////spread extrae la informacion de otro arreglo u objeto y la asigna
////a la nueva variable, de esta forma podemos agregar otro valor
let arreglo2 = [...arreglo, 5]
// arreglo2.push(5)

////crea una copia de del arreglo original, pero con cada valor procesado
////por la función que le asignamos
const arreglo3 = arreglo2.map(function(numero) {
  return numero * 2
})



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);





