import { useContext, useState } from "react"
import {ItemCounter} from '../ItemCounter/ItemCounter'
import { CartContext } from '../../context/CartContext';

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


export const ItemDetail = ({item}) => {

   const {addItem, isInCart } = useContext(CartContext)     
   
  const [ cantidad, setCantidad  ] = useState ( 0 )

             const navigate = useNavigate ()            
  
             const handleVolver =()=>{
              navigate( -1)
            }

  const handleAgregar =()=> {
    if (cantidad===0) return  
        
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