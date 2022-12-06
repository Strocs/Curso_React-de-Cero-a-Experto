
export const getImages = async() => {

  try {
    const apiKey2 = 'SP7hbY80Uu6RgwKtSIDV8ZHpfoknOc2S'
    const apiKey = 'asdasdasdasd'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json()
    const {url} = data.images.original

    return url
  
  } catch (err) {
    // manejo del error
    console.error(err)
    return 'No se encontró la imagen'
  }
  
}

