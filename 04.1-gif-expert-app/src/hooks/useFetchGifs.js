import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })
	//hace que la renderizacion del elemento se ejecute una única vez
    useEffect(() => {
        
        getGifs( category ).then(imgs => setState({
            data: imgs,
            loading: false,
        }));

    }, [ category ]) 
    
    return state
}