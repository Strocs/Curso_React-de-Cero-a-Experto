import { describe, test, expect } from 'vitest'
import { getImages } from '../../src/bases/11-async-await'

describe('Pruebas en 11-async-await', () => {
	test('debe retornar una URL de la imagen', async () => {
    const url = await getImages()
    console.log(url)

    // Este método deja pasar el error
    // Es posible hacer un try para reconocer el catch
    expect(typeof url).toBe('string')

    //??????
    // await expect(typeof getImages()).resolves.toEqual('string')

  })
})
