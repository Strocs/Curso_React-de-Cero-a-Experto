import { useCamelCase, useFetchGifs } from '../hooks'
import { GifItem } from './'
import PropTypes from 'prop-types'
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)
  const { camelCasedText } = useCamelCase(category)
  return (
    <>
      <h3>{camelCasedText}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className='card-grid'>
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
