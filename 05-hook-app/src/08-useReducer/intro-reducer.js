const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false
}]

const todoReducer = (state = initialState, action = {}) => {
  //action dice cómo se va a cambiar el estado y siempre retorna un nuevo estado
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }

  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  //payload es la carga nueva que entra al reducer
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log({state: todos});