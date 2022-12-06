import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe('Tests in 09-promesas', () => { 

    // enviar done, el test esperará en caso de una funcion asincrona
    test('should return a Heroe async', ( done ) => { 
        const id = 1

        getHeroeByIdAsync( id )
            .then(heroe => {
                expect(heroe).toBe( heroes[0])
                done()
            })
     })

    test('should return an error if hero by id doesnt exist', ( done ) => { 
        const id = 10

        getHeroeByIdAsync( id )
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
     })
     
 })