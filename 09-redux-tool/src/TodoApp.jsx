import { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/api/todosApi'

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
      {todos.map(todo => <li key={todo.id}><strong>{todo.completed ? 'Done' : 'Pending'}</strong> {todo.title}</li>)}
      </ul> */}
      <button onClick={() => todoId !== 1 && setTodoId(todoId - 1)}>
        Previous Todo
      </button>
      <button onClick={() => setTodoId(todoId + 1)}>Next Todo</button>
    </>
  )
}
