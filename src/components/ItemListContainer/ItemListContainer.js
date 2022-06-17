
/*CONTEXT

import { useContext, useState , useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { pedirDatos } from '../../mook/pedirDatos'
import ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'

      
export const ItemListContainer = () => {

                           
     
        const [items, setItems] = useState([])   
        const [loading , setLoading ] = useState (true)
        
        const {categoryId} = useParams()
        console.log (categoryId)
                
        useEffect(() => { 
               
             pedirDatos ()   
                 .then((resp)=>{
                     if(!categoryId){
                          setItems(resp)   
                     }else{
                         setItems(resp.filter((item)=>item.categoria===categoryId))
                     }   
                 } )
                 .catch((error)=>{
                     console.log("ERROR :", error)
                 } )
                 .finally(() => {
                     setLoading(false)    
                 } ) 
        },[categoryId])   



    return (
        <section className="container my5">
        
             {
                loading
                ?    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading. . .</span>
                    </Spinner>
                
               :  <ItemList items={items}/>   
            }
         </section>
    )
}
*/


/*   RENDER */

import { useState , useEffect } from 'react'

import { pedirDatos } from '../../mook/pedirDatos'
import ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
      
export const ItemListContainer = () => {

                           
     
        const [items, setItems] = useState([])   
        const [loading , setLoading ] = useState (true)
        
        const {categoryId} = useParams()
        console.log (categoryId)
                
        useEffect(() => { 
               
             pedirDatos ()   
                 .then((resp)=>{
                     if(!categoryId){
                          setItems(resp)   
                     }else{
                         setItems(resp.filter((item)=>item.categoria===categoryId))
                     }   
                 } )
                 .catch((error)=>{
                     console.log("ERROR :", error)
                 } )
                 .finally(() => {
                     setLoading(false)    
                 } ) 
        },[categoryId])   



    return (
        <section className="container my5">
        
             {
                loading
                ? <Loader/>  
                :  <ItemList items={items}/>   
            }
         </section>
    )
}