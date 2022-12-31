import { describe, expect, test } from 'vitest'
import { types } from '../../../src/auth/types/types'

describe('Tests on types.js', () => {
  test('should return this types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})
