import { useState , useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
      
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from "../../firebase/config"
      
export const ItemListContainer = () => {
    
        const [items, setItems] = useState([])   
        const [loading , setLoading ] = useState (true)
        
        const {categoryId} = useParams()
        console.log (categoryId)
                
        useEffect(() => { 
               
             //1 ARMA REFERENCIA SYNC
             const productosRef = collection(db, "productos")
             const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
            //2 LLAMA AFIREBASE ASYNC 
            getDocs(q)
                 .then((resp)=>{
                     const newItems= resp.docs.map( ( doc ) =>{
                         return{
                            id : doc.id,
                            ...doc.data()
                         }
                      } ) 
                  console.log(newItems)
                   setItems(newItems)
               })
                 .finally( ()=>{ 
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