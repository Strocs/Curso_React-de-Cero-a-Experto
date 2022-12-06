import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const API_KEY = 'SP7hbY80Uu6RgwKtSIDV8ZHpfoknOc2S'

export const useFetchGifs = category => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category, API_KEY).then(
      newImage => setImages(newImage),
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    )
  }, [])
  return { images, isLoading }
}
