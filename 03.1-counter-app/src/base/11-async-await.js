
export const getImagen = async() => {

    try {

        const apiKey = '4XpTMVc2o3FJ8eZvxy4xD7NJyvskJZH9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No existe'
    }
    
}



