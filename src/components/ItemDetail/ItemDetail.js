/* ORIGINAL
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
                handleAgregar={handleAgregar }        //PROPIEDAD CON NOMBRE AL AZAR
            />
   </div>    
  )  
}
*/
/*HOY14*/

import { useContext, useState } from "react"
import {ItemCounter} from '../ItemCounter/ItemCounter'
import { CartContext } from '../../context/CartContext';

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


export const ItemDetail = ({item}) => {

   const {addItem, isInCart } = useContext(CartContext)     
   
  const [ cantidad, setCantidad  ] = useState ( 1 )

             const navigate = useNavigate ()            
  
             const handleVolver =()=>{
              navigate( -1)
            }

  const handleAgregar =()=> {
        const itemToCart ={
            ...item,           
            cantidad 
        }
      addItem(itemToCart )  
  }                    

  
  return(
    <div className="container my-5">
           <h2>{item.nombre}</h2>
            <h2>{item.marca}</h2>
            <img src={item.img} alt ={item.nomre}/>
            <h2>Precio: $ {item.precio}</h2>
            <hr/>
            {
              isInCart(item.id)          
              ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>                    
              :                         
                  <ItemCounter 
                      max = {item.stock} 
                      counter={cantidad}
                      setCounter={setCantidad}
                      handleAgregar={handleAgregar }        
                  />
            }
            <hr/>
           <button onClick={handleVolver}>VOLVER</button> 
   </div>    
  )  
}
