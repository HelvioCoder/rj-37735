import CartWidget from '../CartWidget/CartWidget'

const Navbar = ( )=> {

    return (
            <header>  
                <div class="brand-menu">   
                    <h1> VIAJES HC</h1>
                    <nav>
                        <ul>
                             <li><a href="" target="_blank">Norte Argentino</a></li> 
                             <li><a href="" target="_blank">Mesopotamia</a></li>
                             <li><a href="" target="_blank">Patagonia</a></li>
                             <CartWidget/>
                        </ul>
                        
                    </nav>
                </div> 
            </header>    
    )
}
export default Navbar