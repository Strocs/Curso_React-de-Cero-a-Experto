import { useRef } from 'react'

export const TodoAdd = ({ onNewTodo }) => {
  const inputRef = useRef()

  const onSubmit = event => {
    event.preventDefault()
    if (inputRef.current.value.trim().length < 1) return
    onNewTodo({
      id: new Date().getTime(),
      description: inputRef.current.value,
      done: false
    })
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Qué hay que hacer?'
        className='form-control'
        ref={inputRef}
      />
      <button type='submit' className='btn btn-outline-primary mt-2'>
        Agregar TODO
      </button>
    </form>
  )
}
