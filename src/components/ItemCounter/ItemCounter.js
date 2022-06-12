/* C/EVENTOS EJ 3  contador de stock 46:30 a 55
import { useState } from "react"

export const ItemCounter = ({max}) =>{

    const [ counter, setCounter ] = useState ( 1 )

    const handleSumar =() =>{
       counter < max && setCounter(counter+1)
    }
    const handleRestar =() =>{
       counter >1 && setCounter(counter-1)
    }

      return(
         <div className="my-3">
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{ counter }</span>
              <button onClick={handleSumar}  className="btn btn-primary">+</button>
         </div>
      )
}
*/

/* C/EVENTOS EJ4 A  boton agregar al carrito 55:17 A 1:2:45
import { useState } from "react"

export const ItemCounter = ({max , item }) =>{

    const [ counter, setCounter ] = useState ( 1 )

    const handleSumar =() =>{
       counter < max && setCounter(counter+1)
    }
    const handleRestar =() =>{
       counter >1 && setCounter(counter-1)
    }
    const handleAgregar =() =>{
      console.log(item)
  
          const itemToCart = {
               ...item,
               cantidad: counter
          }
          console.log(itemToCart )
   } 


      return(
         <div className="my-3">
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{ counter }</span>
              <button onClick={handleSumar}  className="btn btn-primary">+</button>
              <hr/>
              <button onClick={handleAgregar} className="btn btn-success"> Agregar al carrito </button>
         </div>
      )
}

*/

/* C/EVENTOS EJ 4 B TODA LA LOGICA EN ITEMDETAIL  1:03:40 A 1:10:03
export const ItemCounter = ({max , setCounter, counter}) =>{

    const handleSumar =() =>{
       counter < max && setCounter(counter+1)
    }
    const handleRestar =() =>{
       counter >1 && setCounter(counter-1)
    }
     return(
         <div className="my-3">
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{ counter }</span>
              <button onClick={handleSumar}  className="btn btn-primary">+</button>
              <hr/>
              <button  className="btn btn-success"> Agregar al carrito </button>
         </div>
      )
}
*/


/*C/EVENTOS Ej 4 C FUNCION CARRITO 1:10:22 a 1::14:40*/

export const ItemCounter = ({max , setCounter, counter, handleAgregar}) => {

    const handleSumar =() =>{
       counter < max && setCounter(counter+1)
    }
    const handleRestar =() =>{
       counter >1 && setCounter(counter-1)
    }
    


      return(
         <div className="my-3">
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{ counter }</span>
              <button onClick={handleSumar}  className="btn btn-primary">+</button>
              <hr/>
              <button onClick={handleAgregar} className="btn btn-success"> Agregar al carrito </button>
         </div>
      )
}
