import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from '../03-examples/LoadingQuote'
import { Quote } from '../03-examples/Quote'

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )

  // const { quote, author } = false
  const { quote, author } = !!data && !!data[0] && data[0]

  return (
    <div className='m-auto'>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : !data[0] ? (
        <Quote quote='The Quote does`nt exist' author='Owner of this app' />
      ) : (
        <Quote quote={quote} author={author} />
      )}
      <hr />
      <button
        disabled={isLoading}
        onClick={() => decrement()}
        className='btn btn-primary'
      >
        {'< '}Atrás
      </button>
      <button disabled={isLoading} onClick={reset} className='btn btn-primary'>
        Volver al Inicio
      </button>
      <button
        disabled={isLoading}
        onClick={() => increment()}
        className='btn btn-primary'
      >
        Siguiente{' >'}
      </button>
    </div>
  )
}
