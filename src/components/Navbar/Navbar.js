import CartWidget from '../CartWidget/CartWidget'

const Navbar = ( )=> {

    return (
            <header>  
                <div className="brand-menu">   
                    <h1> Distribuidora HC</h1>
                    <nav>
                        <ul>
                             <li><a href="" target="_blank">Limpieza</a></li> 
                             <li><a href="" target="_blank">Perfumeria</a></li>
                             <li><a href="" target="_blank">Almacen</a></li>
                             <CartWidget/>
                        </ul>
                        
                    </nav>
                </div> 
            </header>    
    )
}
export default Navbar