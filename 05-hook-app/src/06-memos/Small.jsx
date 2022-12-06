import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log('Me volví a generar')
  return <small>{value}</small>
})
