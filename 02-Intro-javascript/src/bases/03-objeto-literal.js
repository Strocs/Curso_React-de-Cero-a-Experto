//Objetos literales
//Diccionarios

const persona = {
    nombre: 'Ignacio',
    apellido: 'Molina',
    edad: 31,
    direccion: {
      ciudad: 'Porvenir',
      zip: 2391823,
      lat: 32.22325,
      lng: 22.39184,
    }
  }
  
  //ponerlo entre llaves mete el resultado en otro objeto llamado persona
  // es igual que poner persona:persona
  // console.log({persona});
  // console.table(persona);
  
  
  console.log(persona);
  // Copia la referencia del espacio en memoria
  const persona2 = persona;
  persona2.nombre = 'Fernando'
  
  console.log(persona2);
  // se modificó el espacio en memoria de persona
  console.log(persona);
  
  //Spread, genera un clon del objeto
  const persona3 = {...persona}
  persona3.nombre = 'Andrés'
  
  console.log(persona3, persona2, persona);
  