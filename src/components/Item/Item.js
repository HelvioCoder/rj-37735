/*
const Item =( {item} ) => {

                return (
                        <div key={item.id}>
                            <h2>{item.nombre}</h2>
                            <p>{item.marca}</p>
                            <img src={item.img}></img>
                            <h4>Precio: ${item.precio}</h4>
                            <hr/>
                        </div>
                )
}                    
export default Item
*/
import {Link} from "react-router-dom"

const Item =( {item} ) => {

                return (
                        <div key={item.id}>
                            <h2>{item.nombre}</h2>
            {/*                <p>{item.marca}</p>                    */}
                            <img src={item.img}/>
            {/*         <h4>Precio: ${item.precio}</h4>       npm start       */}
                            <Link to={`/item/${item.id}`}>     
             <button className="btn btn -primary my-2">Mas detalle</button>
                            </Link>
                        </div>
                )
}                    
export default Item

