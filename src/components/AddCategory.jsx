import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState(""); 
    
    const onInputChange = ({target}) =>{
        // console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        //preventDefault evita que el formulario recarge la pagina cuando se de a Enter
        event.preventDefault();
        // console.log(inputValue);

        //Si no escriben o solo ponen un caracter no se guarda en el array
        if(inputValue.trim().length <=1) return;
        
        // setCategories(c => [inputValue, ...c]);
        onNewCategory( inputValue.trim() )

        setInputValue(" ");//Vaciar el input despues de hacer Enter
    }


    return(

        //onSubmit se activa cuando se envia el formulario
        <form onSubmit={ onSubmit }>
            <input 
            type = "text"
            placeholder="Buscar gifs"
            value={inputValue}
            // onChange={ (event) => onInputChange(event)}
            //Cada vez que cambia el input, se llama a la funcion
            onChange={ onInputChange }
        />
        </form>
    )
}