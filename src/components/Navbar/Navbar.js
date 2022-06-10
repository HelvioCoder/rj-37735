/*
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ( )=> {

    return (
            <header>  
                <div className="brand-menu">   
                    <h1> Distribuidora HC</h1>
                    <nav>
                        <ul>
                             <li><a href="" target="_blank">Almacen</a></li> 
                             <li><a href="" target="_blank">Farmacia</a></li>
                             <CartWidget/>
                        </ul>
                        
                    </nav>
                </div> 
            </header>    
    )
}
export default Navbar
*/

import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const Navbar = ( )=> {

    return (
            <header className="header">
                <div className="header__container">   
                    <Link to ={"/"}> <h1 className="header__logo"> Distribuidora HC</h1> </Link>
                    
                    <nav className="header__navbar">
                          {/*   <Link to ={"/categproas/"} className="header__navlink">Home</Link>  */}
                             <Link to ={"/categorias/almacen"} className="header__navlink">Almacen</Link> 
                             <Link to ={"/categorias/farmacia"} className="header__navlink">Farmacia</Link>
                             <CartWidget/>
                    </nav>
                </div> 
            </header>    
    )
}
export default Navbar