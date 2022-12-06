import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.css'

const CounterApp = ({ value = 0 }) => {
  const [count, setCount] = useState(value)

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)} type='button'>
          +1
        </button>
        <button onClick={() => setCount(count - 1)} type='button'>
          -1
        </button>
        <button
          aria-label='btn-reset'
          onClick={() => setCount(value)}
          type='button'
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default CounterApp

CounterApp.propTypes = {
  value: PropTypes.number
}
