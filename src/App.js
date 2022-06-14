/*original

import './styles.scss';
import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import {Almacen} from './components/Almacen/Almacen'
import {Farmacia} from './components/Farmacia/Farmacia'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

   return (
       <BrowserRouter>
             <Navbar/>
             <Routes>
                  <Route path='/'element = { <ItemListContainer/> }/>
                  <Route path='/categorias/:categoryId' element = {<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element = {<ItemDetailContainer/>}/>  
                  <Route path='/almacen' element = {<Almacen/>}/>
                  <Route path='/farmacia' element = {<Farmacia/>}/>
                  <Route path='*'element = {<Navigate to={"/"}/>}/>
             </Routes>
            
      </BrowserRouter>
   );
}

export default App;
*/

/*hoy 14*/
import './styles.scss';
import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {Almacen} from './components/Almacen/Almacen'
import {Farmacia} from './components/Farmacia/Farmacia'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

import { CartContext, CartProvider } from './context/CartContext';
import {useState} from 'react'

import { Cart } from './components/Cart/Cart';


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

                        <Route path='/almacen' element = {<Almacen/>}/>
                        <Route path='/farmacia' element = {<Farmacia/>}/>
                        <Route path='*'element = {<Navigate to={"/"}/>}/>
                  </Routes>
            </BrowserRouter>
         </CartProvider>   
   );
}
export default App;