import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Strocs',
    email: 'strocsdev@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    // e.preventDefault()
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='example@format.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {username === 'Stroqs' && <Message />}
    </>
  )
}
