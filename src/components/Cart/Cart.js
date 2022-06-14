/* CONTEXTO EJERCICIO 2      calcula total y icono cart         1:02:58 A   1:18:25     
// import {useContext} from "react"
// import { CartContext} from "../../context/CartContext"
import { useCartContext } from "../../context/CartContext"

export const Cart = () => {
    const {cart, totalPrice , emptyCart} = useCartContext()    
    return (  
        <div className="container my-5">
           <h2>Tu compra</h2>
           <hr/>
          {
                cart.map((item) => (      
                <div key={item.id} className="my-2">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <hr/>
                </div>
                ))
          }
          <h4>TOTAL: ${ totalPrice() }</h4>

          <button onClick ={emptyCart} className="btn btn-danger"> Vaciar carrito </button>
         </div>
    );
}
 

/* CONTEXTO EJ 4 REMOVER ITEMS Y ICONO 1:32:58 A  1:39:38            */



import { useCartContext } from "../../context/CartContext"
import {BsFillTrashFill} from "react-icons/bs"

export const Cart = () => {
    const {cart, totalPrice , emptyCart, removeItem} = useCartContext()    
    return (  
        <div className="container my-5">
           <h2>Tu compra</h2>
           <hr/>
          {
                cart.map((item) => (      
                <div key={item.id} className="my-2">
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick ={()=>removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>
                </div>
                ))
          }
          <h4>TOTAL: ${ totalPrice() }</h4>

          <button onClick={emptyCart } className="btn btn-danger"> Vaciar carrito </button>
         </div>
    );
}
 