


export const ItemDetail = ({item}) => {

    return(
      <div className="container my-5">
             <h2>{item.nombre}</h2>
              <h2>{item.marca}</h2>
              <img src={item.img} alt ={item.nomre}/>
              <h2>Precio: $ {item.precio}</h2>
       </div>    
    )
}