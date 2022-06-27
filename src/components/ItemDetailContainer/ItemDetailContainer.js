import { useState , useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {Loader} from '../Loader/Loader'

import { doc, getDoc} from 'firebase/firestore'   
import { db } from "../../firebase/config"         


export const ItemDetailContainer = () => {
     
        const [item, setItem] = useState(null)   
        const [loading , setLoading ] = useState (true)
        
        const {itemId}=useParams()
             
        useEffect(() => { 
              
           const docRef = doc(db,"productos", itemId )           
           
           getDoc(docRef )
                .then((doc) => {    
                setItem( {id: doc.id, ...doc.data()})
                 } )
                .finally(()=>{ 
                    setLoading(false)
                } )
                
        },[])   

    return (
        <section className="container my5">
        
             {
                loading
                ?    <Loader/>                
               :    <ItemDetail item= {item} /> 
            }
       </section>
    )
}
