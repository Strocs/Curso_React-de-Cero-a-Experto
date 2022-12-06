import { useTodo } from '../hooks'
import { TodoAdd, TodoList } from './'

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  } = useTodo([])

  return (
    <>
      <h1>TodoApp</h1>
      <small>
        <b>Total:</b> {todosCount}
      </small>
      <span> /// </span>
      <small>
        <b>Pendientes:</b> {pendingTodosCount}
      </small>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
