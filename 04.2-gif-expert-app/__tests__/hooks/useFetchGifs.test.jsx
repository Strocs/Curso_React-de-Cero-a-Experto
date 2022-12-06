import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'
describe('tests in hook useFetchGif', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should return an array of images and isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 5000 }
    )

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
