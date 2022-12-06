export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        role='button'
        onClick={() => onToggleTodo(todo.id)}
        className={`align-self-center  ${
          todo.done ? 'text-decoration-line-through text-danger' : ''
        }`}
        aria-label='span'
      >
        {todo.description}
      </span>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className='btn btn-danger'
        aria-label='button'
      >
        Borrar
      </button>
    </li>
  )
}
