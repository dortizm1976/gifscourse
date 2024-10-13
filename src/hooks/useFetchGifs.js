import { useState, useEffect } from "react"
import { GetGifs } from "../helpers/GetGifs"


export const useFetchGifs = (category) => {
    
    //States
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    //funciones
    const getImages = async () => {
         const newImages = await GetGifs(category)
         setImages(newImages)
         setLoading(false)
    }

    //useEfects
    useEffect( ()=>{
         //GetGifs(category);
         getImages()
     }, [])

    return {
        images : images,
        isLoading : loading,
    }
}
