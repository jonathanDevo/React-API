import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

//Un hook es una funcion que regresa algo
export const useFetchGifs = ( categoria ) =>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setIsLoading(false);
    }

    //UseEffect: sirve para que cuando algo cambie, se dispare un proceso
    useEffect(() =>{
        getImages();

        // getGifs(categoria)
        //     .then( (newImages) => setImages(newImages));
    }, []);//No poner ninguna dependencia hace que solo se ejecute una vez

    return{
        // images: images,
        // isLoading: isLoading
        //Al tener el mismo nombre se puede poner solo el nombre
        images,
        isLoading
    }
}