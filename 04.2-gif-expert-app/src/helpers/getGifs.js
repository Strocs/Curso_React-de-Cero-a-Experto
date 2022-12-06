export const getGifs = async (category, API_KEY) => {
  let result = []
  await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
  )
    .then(resp => resp.json())
    .then(({ data }) => {
      result = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url
      }))
      return result
    })
    .catch(error => {
      console.error('Error', error)
    })
  return result
}
