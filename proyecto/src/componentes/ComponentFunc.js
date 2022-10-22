import React from "react";
import { useState, useEffect } from "react";

function ComponentFunc () {
    let [contador, setContador]=useState(0)
    useEffect (() => {
        const interval = setInterval(() => {
            setContador(contador = contador + 1)        
        }, 1000);
        return() => clearInterval(interval)
    }, [])
    
    return( 
        <h1> Estado 4: {contador} </h1>       
    )
}

function ComponentFunc2 (){
    let [contador2, setContador2] = useState(5)    
    return(
        <div className="boton">
            <h1> {contador2} </h1>
            <button onClick={() => setContador2(contador2 = contador2 + 1)}> Contar </button>
        </div>     
    )
}

export {ComponentFunc, ComponentFunc2}