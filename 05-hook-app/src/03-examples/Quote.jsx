import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ quote, author }) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({
      width,
      height
    })
  }, [])

  return (
    <>
      <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
        <p ref={pRef} className='mb-1' style={{ backgroundColor: '#ffaa22' }}>
          {quote}
        </p>
        <span className='blockquote-footer'>{author}</span>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
