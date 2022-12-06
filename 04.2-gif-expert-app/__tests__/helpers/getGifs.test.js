import { describe, expect, test } from 'vitest'
import { getGifs } from '../../src/helpers/getGifs'

describe('tests in getGif', () => {
  const API_KEY = 'SP7hbY80Uu6RgwKtSIDV8ZHpfoknOc2S'
  test('should return an array of gifs', async () => {
    const gifs = await getGifs('One Punch', API_KEY)
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
