import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

vi.mock('../../src/hooks/useTodo')

// afterEach(() => vi.clearAllMocks())

describe('Tests on <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Todo 1',
        done: false
      },
      {
        id: 2,
        description: 'Todo 2',
        done: true
      }
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    handleNewTodo: vi.fn()
  })

  test('should be displayed', () => {
    render(<TodoApp />)

    expect(screen.getByText('Todo 1')).toBeTruthy()
    expect(screen.getByText('Todo 2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
