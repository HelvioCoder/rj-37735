
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