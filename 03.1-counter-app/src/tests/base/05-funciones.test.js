import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-Funciones', () => { 

    test('should getUser return an object', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser()
        // No se pueden evaluar objetos con ====, con toEqual evalua los valores
        expect(user).toEqual(userTest)
     })

     // getUusuarioActivo debe de retornar un objeto
     test('should getUsuarioActivo return an object', () => { 

        const nombre = 'Ignacio'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre)

        expect(user).toEqual(userTest)

        
      })
 })