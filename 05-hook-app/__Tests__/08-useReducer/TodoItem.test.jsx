import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('Tests on <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }

  const onDeleteTodoMock = vi.fn()
  const onToggleTodoMock = vi.fn()

  beforeEach(() => vi.clearAllMocks())

  test('should display pending todo', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain(
      'text-decoration-line-through text-danger'
    )
  })

  test('should display completed todo', () => {
    todo.done = true

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain(
      'text-decoration-line-through text-danger'
    )
  })

  test('should span call ToggleTodo when is click it', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    const spanElement = screen.getByLabelText('span')

    fireEvent.click(spanElement)

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('should button call DeleteTodo when is click it', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    const buttonElement = screen.getByLabelText('button')
    fireEvent.click(buttonElement)

    expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id )
  })
})
