//Agrupa pruebas
describe('Pruebas en el archivo demo.test.js', () => { 
    
    test('should be same strings', () => { 
        // 1. Inicializaciones
        const mensaje = 'Hola Mundo'
        // 2. estimulo
        const mensaje2 = `Hola Mundo`
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2)  // ===
    
    })

 })
