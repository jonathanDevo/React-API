import { useState } from "react"
// import { AddCategory, GifGrif } from "./components/index";
//Por defecto busca el index.js
import { AddCategory, GifGrif } from "./components";

export const GiftExpertApp = () =>{
    //1.Renderizado
    const [categories, setCategories] = useState(['One Punch']);


    //3.Renderizado
    const onAddCategoria = (newCategory) => {
        // console.log(newCategory);
        //Pasas las cadenas a minusculas para compararlas
        const newCategoryLower = newCategory.toLowerCase();
        const categoriesLower = categories.map(category => category.toLowerCase());

        if(categoriesLower.includes(newCategoryLower)) return;

        setCategories( [newCategory, ...categories])//Esto cambia el estado y se vuelve a renderizar GiftExpertApp
    };
    


    return(
        //2.Renderizado
        <>
            {/* Titulos */}
            <div>GiftExpertApp</div>

            {/* Input */}
            <AddCategory 
            onNewCategory = { (value) => onAddCategoria(value)}
            />

            {/* Listado de Gifts */}

            { categories.map( category =>
                (
                    <GifGrif key={ category } categoria={category}/>
                )
            )}



        </>
    )
}