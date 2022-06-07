
import { useEffect, useState } from "react"
import {productos} from "../mook/data"
//import {ItemDetail} from "../ItemDetail/ItemDetail"
import {pedirDatos} from "../mook/pedirDatos"


export const ItemDetailContainer = () => {
   
    const[itempro,setProducto] = useState([])

      
    
    
    const [produ,setprodu]=useState(null)
//console.log(produ)
    const [id,setid] = useState(1)
 //console.log(id)  
    const handleSiguiente =()=>{
        setid(id+1)
    }
    const handleAnterior =()=>{
        setid(id-1)
    }
   
               useEffect (()=> {
                    function findById(id) {
                    return productos.find(function(prodId){
                            return prodId.id===id;
                    });
                    }
                    setprodu (findById(id))
        },[id])
     

         
    useEffect(()=>{
        pedirDatos( )
                .then ((resp) => {
                    setProducto(resp)
                })
                .catch ((error) => {
                    console.log('ERROR',error)
                })
            },[])

    return (
           <section className="container my5">    
                <h3> Pro API </h3> 
                <hr/>
                    
                    <button classNmae="btn btn-primary" onClick={handleAnterior}>Anterior</button>
                    <button classNmae="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>

                    <h3>Producto : {produ?.id}</h3>
                    <img src={produ?.img}/>
          {/*    <a href=" " target="_blank">Ver detalle</a>                  */}
               
               {         
         //       <ItemDetail itempro= {itempro}/>            
                
                }      

          </section>   
    )
}