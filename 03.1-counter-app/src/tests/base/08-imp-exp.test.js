import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Test in 08-imp-exp', () => { 
    test('should return a hero by id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find( h => h.id === id )

        // arreglos y objetos no son primitivos usar toEqual
        expect( heroe ).toEqual(heroeData)
     }) 

     test('should return undefined', () => { 
        
        const id = 10;
        const heroe = getHeroeById(id)
        
        //toBe para Primitivos, o sea exactamente iguales
        expect( heroe ).toBe(undefined)
     }) 

     // debe retornar un arreglo con los heroes de DC
     // owner
     // toEqual al arreglo filtrado
     test('should return an array with DC owner', () => { 
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        
        const ownerData = heroes.filter( h => h.owner === owner)

        expect(ownerData).toEqual(heroes)
     }) 

     // debe retornar un arreglo con los heroes de Marvel
     // lenght = 2 //toBe
     test('should be lenght = 2', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)
     }) 

 })