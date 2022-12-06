import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => { 

    test('Should be return Hola Fernando!, getSaludo', () => { 
        
        const nombre = 'Fernando'

        const saludo = getSaludo( nombre )
        
        expect( saludo ).toBe( 'Hola ' + nombre + '!' )
     })

     //getSaludo debe de retornar Hola Carlos! si no hay argumentos en nombre
     test('should getSaludo return Hola Carlos!', () => { 
        
        const saludo = getSaludo()
        expect( saludo ).toBe( 'Hola Carlos!' )

      })
 })


