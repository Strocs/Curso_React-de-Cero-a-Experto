const getImagenPromesa = () => new Promise(resolve => resolve('https://asdkjasd.com'))
getImagenPromesa().then(console.log)

const getImages = async() => {

  try {
    const apiKey = '4XpTMVc2o3FJ8eZvxy4xD7NJyvskJZH9'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json()
    const {url} = data.images.original
  
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

  } catch (err) {
    // manejo del error
    console.error(err)
  }
  
}


getImages()