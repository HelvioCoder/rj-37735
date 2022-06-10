/*

import { useState , useEffect } from 'react'
import ItemCount from '../ItemCount'
import { Spinner } from 'react-bootstrap'
import { pedirDatos } from '../mook/pedirDatos'
import ItemList from '../ItemList/ItemList'


export const ItemListContainer = () => {
     
        const [items, setItems] = useState([])   
        const [loading , setLoading ] = useState ( [] )
        
                
        useEffect(() => { 
 
             pedirDatos ()   
                 .then((resp) => {
                     setItems(resp)   
                 } )
                 .catch((error)=>{
                     console.log("ERROR :", error)
                 } )
                 .finally(() => {
                     setLoading(false)    
                 } ) 
        }, [])   



    return (
        <section className="container my5">
        
            {
                loading
                ?    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading. . .</span>
                    </Spinner>
                
                :  <ItemList items={items}/>
            }

            <ItemCount/>
                         
        </section>
    )
}
*/

import { useState , useEffect } from 'react'
import ItemCount from '../ItemCount'
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
 
            <ItemCount/>
                         
        </section>
    )
}