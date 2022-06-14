/*ORIGINAL
const CartWidget = ( )=> {

    return (
           <div>
                    
           </div>
            )
}
export default CartWidget
*/

/*HOY14*/
//import {useContext} from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
//import { CartContext } from '../../context/CartContext'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = ( )=> {

  //   const {totalQuantity} = useContext(CartContext) 
       const {totalQuantity} =useCartContext()     

    return (
           <Link to ="/cart" className="widget">           
                 <BsFillCartPlusFill/> 
                 <span>{totalQuantity()}</span>       
           </Link>
            )
}
