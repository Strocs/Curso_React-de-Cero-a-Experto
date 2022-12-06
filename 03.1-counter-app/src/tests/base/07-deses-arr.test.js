import { retornaArreglo } from "../../base/07-deses-arr"

describe('Tests in 07-deses-arr', () => { 
    test('should return a string and a number', () => { 

        const [letras, numeros] = retornaArreglo() //['ABC', 123]

        // expect(arr).toEqual(['ABC', 123])
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')


     })
    
 })