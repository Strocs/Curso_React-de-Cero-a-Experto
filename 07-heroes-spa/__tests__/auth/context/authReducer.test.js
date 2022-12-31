import { describe, expect, test } from 'vitest'
import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('tests on authReducer', () => {
  test('should return default state', () => {
    const isLogged = authReducer(
      {},
      {
        type: undefined
      }
    )
    expect(isLogged).toEqual({})
  })

  test('should set an user when calls login dispatch', () => {
    const action = {
      type: types.login,
      payload: 'Ignacio'
    }

    const isLogged = authReducer({}, action)

    expect(isLogged).toEqual({ logged: true, user: 'Ignacio' })
  })

  test('should delete user and set logged on false', () => {
    const action = {
      type: types.logout
    }
    const isLogged = authReducer(
      {
        logged: true,
        user: 'Ignacio'
      },
      action
    )

    expect(isLogged).toEqual({ logged: false })
  })
})
