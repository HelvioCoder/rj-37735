
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

