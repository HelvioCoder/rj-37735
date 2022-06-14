/* ORIGINAL

import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const Navbar = ( )=> {

    return (
            <header className="header">
                <div className="header__container">   
                    <Link to ={"/"}> <h1 className="header__logo"> Distribuidora HC</h1> </Link>
                    
                    <nav className="header__navbar">
                          {/*   <Link to ={"/categproas/"} className="header__navlink">Home</Link>  *
                             <Link to ={"/categorias/almacen"} className="header__navlink">Almacen</Link> 
                             <Link to ={"/categorias/farmacia"} className="header__navlink">Farmacia</Link>
                             
                    </nav>
                </div> 
            </header>    
    )
}
export default Navbar
*/
/*HOY14*/

import {Link} from 'react-router-dom'
import {CartWidget} from '../CartWidget/CartWidget'

const Navbar = ( )=> {

    return (
            <header className="header">
                <div className="header__container">   
                    <Link to ={"/"}> <h1 className="header__logo"> Distribuidora HC</h1> </Link>
                    
                    <nav className="header__navbar">
                          {/*   <Link to ={"/categproas/"} className="header__navlink">Home</Link>  */}
                             <Link to ={"/categorias/almacen"} className="header__navlink">Almacen</Link> 
                             <Link to ={"/categorias/farmacia"} className="header__navlink">Farmacia</Link>
                    </nav>
                    <CartWidget/> 
                </div> 
            </header>    
    )
}
export default Navbar