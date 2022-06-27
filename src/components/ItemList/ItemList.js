import Item from '../Item/Item'

const ItemList = ( {items} ) => {

       return(
           <div>
               <p> Deploy con Netlify</p>
               <h2>Nuestros productos</h2>
               <hr/>
                {
                  items.map((item) => <Item  key= { item.id }  item = { item }/> )    
                }
           </div>
       )
}       

export default ItemList

