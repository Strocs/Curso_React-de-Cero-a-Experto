import PropTypes from 'prop-types'
import { useState } from 'react'

const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value)

	//handleAdd
	//setCounter( (c) => c + 1 )
	const   handleAdd = () => setCounter(counter + 1),
		    handleSubtract = () => setCounter(counter - 1),
		    handleReset = () => setCounter(value)

	return (
		<>
			<h1>CounterApp:</h1>
			<h2>{counter}</h2>

			<button onClick={ handleAdd }>+1</button>
			<button onClick={ handleReset }>Reset</button>
			<button onClick={ handleSubtract }>-1</button>
		</>
	)
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
	value: 0,
}

export default CounterApp
