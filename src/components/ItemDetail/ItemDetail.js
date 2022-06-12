/*ORIGINAL 


export const ItemDetail = ({item}) => {

    return(
      <div className="container my-5">
             <h2>{item.nombre}</h2>
              <h2>{item.marca}</h2>
              <img src={item.img} alt ={item.nomre}/>
              <h2>Precio: $ {item.precio}</h2>
       </div>    
    )
}
*/

import { useState } from "react"
import {ItemCounter} from '../ItemCounter/ItemCounter'

export const ItemDetail = ({item}) => {

  const [ cantidad, setCantidad  ] = useState ( 1 )

  const handleAgregar =()=> {
        const itemToCart ={
            ...item,            //PUEDE O NO TENER TODA LA DESCRIPCION
            cantidad 
        }
        console.log(itemToCart)
  }

  return(
    <div className="container my-5">
           <h2>{item.nombre}</h2>
            <h2>{item.marca}</h2>
            <img src={item.img} alt ={item.nomre}/>
            <h2>Precio: $ {item.precio}</h2>
            <hr/>
            <ItemCounter 
                max = {item.stock} 
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}        //PROPIEDAD CON NOMBRE AL AZAR
            />
   </div>    
  )  
}