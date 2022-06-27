
import {Link} from "react-router-dom"

const Item =( {item} ) => {

                return (
                        <div key={item.id}>
                            <h2>{item.nombre}</h2>
                            <img src={item.img}alt=""/>
                            <Link to={`/item/${item.id}`}>     
             <button className="btn btn -primary my-2">Mas detalle</button>
                            </Link>
                        </div>
                )
}                    
export default Item

