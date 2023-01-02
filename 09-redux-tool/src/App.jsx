import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter'

export function App () {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment By 2
        </button>
      </div>
    </div>
  )
}
