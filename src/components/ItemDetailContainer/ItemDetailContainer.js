/* MIO
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
          {/*    <a href=" " target="_blank">Ver detalle</a>                  
               
               {         
         //       <ItemDetail itempro= {itempro}/>            
                
                }      

          </section>   
    )
}
*/


/* Profesor*/

import { useState , useEffect } from 'react'
import ItemCount from '../ItemCount'
import { Spinner } from 'react-bootstrap'
import { pedirDatos } from '../../mook/pedirDatos'

import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
     
        const [item, setItem] = useState(null)   
        const [loading , setLoading ] = useState (true)
        
       const {itemId}=useParams()
       console.log(itemId)
       console.log(item)         
        useEffect(() => { 
               
             pedirDatos ()   
                 .then((resp)=>{
                    setItem(resp.find((item) => item.id === Number (itemId) ) )
                 } )
                 .catch((error)=>{
                     console.log("ERROR :", error)
                 } )
                 .finally(() => {
                     setLoading(false)    
                 } ) 
        },[])   

    return (
        <section className="container my5">
        
             {
                loading
                ?    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading. . .</span>
                    </Spinner>
                
               :    <ItemDetail item= {item} /> 
            }
 
            <ItemCount/>
                         
        </section>
    )
}