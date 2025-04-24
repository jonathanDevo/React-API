import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrif = ({categoria}) =>{

    //Custom Hook
    const { images, isLoading} = useFetchGifs(categoria);

    // console.log({isLoading});

    return(
        <>
        <ol>
            <h3>{categoria}</h3>
            <p>Hola Mundo</p>

            {
                isLoading && ( <h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    // images.map(img =>(
                    //     <li key={img.id}>{img.title}</li>
                    // ))
                    images.map( (img) =>(
                        //{...img} sirve para esparcir todas las propiedades de cada img
                        //y si tienes por ejemplo 100 no tener que poner una a una
                        <GifItem key={img.id} {...img}/>
                    ))
                }
                
            </div>

        </ol>
        </>
    )
}