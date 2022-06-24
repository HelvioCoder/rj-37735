import './styles.scss';
import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {Almacen} from './components/Almacen/Almacen'
import {Farmacia} from './components/Farmacia/Farmacia'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider } from './context/CartContext';


import { Cart } from './components/Cart/Cart';

import { Checkout } from './components/Checkout/Checkout'

  function App() {
      
   return (
          <CartProvider>
            <BrowserRouter>
                  <Navbar/>
                  <Routes>
                        <Route path='/'element = { <ItemListContainer/> }/>
                        <Route path='/categorias/:categoryId' element = {<ItemListContainer/>}/>
                              <Route path='/item/:itemId' element = {<ItemDetailContainer/>}/>  
                                       <Route path='/cart' element = {<Cart/>}/>  
                                       <Route path='/checkout' element = {<Checkout/>}/>  
                        <Route path='/almacen' element = {<Almacen/>}/>
                        <Route path='/farmacia' element = {<Farmacia/>}/>
                        <Route path='*'element = {<Navigate to={"/"}/>}/>
                  </Routes>
            </BrowserRouter>
         </CartProvider>   
   );
}
export default App;