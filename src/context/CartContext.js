 /* CONTEXTO INTRO 10:46 A 25:08


import {createContext} from "react";

export const MiContext = createContext()
*/

/* cambiamos de nombre a este comp de MiConstext a CartContext
/* CONTEXTO EJERCICIO 1A  CARRITO DE COMPRA 25:08 A 1:19
import {createContext} from "react";

export const CartContext = createContext()

*/

/* CONTEXTO EJ 3 MODULO CONTEXTO DE APP A CARTCONTEXT 1:22:39 A 1:32

import {createContext ,  useContext,  useState } from "react";

export const CartContext = createContext()

export const useCartContext =()=>{  
       return useContext(CartContext)         // retorna el useContext del CartContext    
}

export const CartProvider = ( {children} ) => {       //componente cuyo fin es retornar el proveedor
    const [cart, setCart]= useState( [] )      
    console.log(cart)
   
   const addItem = (item) =>{   
      setCart( [...cart, item] ) 
   }
   
    const isInCart = (id) => {
      return cart.some( (prod)=> prod.id === id)     // recorre prod y id si encuentra coincidencia con el parametro (id)
    }
   
const totalPrice = () => {
      return cart.reduce((acc, prod)=> acc += (prod . precio * prod.cantidad), 0)    
}                   //recorre el array 2 param 1 acumula 2 el producto q recorre, valor inicial 0

const totalQuantity =()=>{
      return cart.reduce((acc,prod)=>acc += prod.cantidad,0)    //sumatoria de la propiedad cantidad de c/ producto 
}

const emptyCart = ()=>{
      setCart([ ])
}

    return (                                 // todo esto se comparte como objeto
           <CartContext.Provider value={ 
                { cart , 
                addItem, 
                isInCart, 
                totalPrice , 
                totalQuantity, 
                emptyCart,
                } 
            }>
                {children}
           </CartContext.Provider>
        )
}
*/

/* CONTEXTO EJ 4 REMOVER ITEMS Y ICONO 1:32:58 A  1:39:38    */

import {createContext ,  useContext,  useState } from "react";

export const CartContext = createContext()

export const useCartContext =()=>{  
       return useContext(CartContext)         // retorna el useContext del CartContext    
}

export const CartProvider = ( {children} ) => {       //componente cuyo fin es retornar el proveedor
    const [cart, setCart]= useState( [] )      
    console.log(cart)
   
   const addItem = (item) =>{   
      setCart( [...cart, item] ) 
   }
   
    const isInCart = (id) => {
      return cart.some( (prod)=> prod.id === id)     // recorre prod y id si encuentra coincidencia con el parametro (id)
    }
   
const totalPrice = () => {
      return cart.reduce((acc, prod)=> acc += (prod . precio * prod.cantidad), 0)    
}                   //recorre el array 2 param 1 acumula 2 el producto q recorre, valor inicial 0

const totalQuantity =()=>{
      return cart.reduce((acc,prod)=>acc += prod.cantidad,0)    //sumatoria de la propiedad cantidad de c/ producto 
}

const emptyCart = ()=>{
      setCart([ ])
}
const removeItem = (id) =>{
    setCart(cart.filter((prod)=>prod.id !==id ) )
}
    return (                                 // todo esto se comparte como objeto
           <CartContext.Provider value={ 
                { cart , 
                addItem, 
                isInCart, 
                totalPrice , 
                totalQuantity, 
                emptyCart,
                removeItem 
                } 
            }>
                {children}
           </CartContext.Provider>
        )
}