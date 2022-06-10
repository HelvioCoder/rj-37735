/*
import './styles.css';
import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

   return (
      <div className="App">
         <div className = "borde"> 
             <h6>Curso React en Coder - Profesor Conrado Lanusse - Alumno: Helvio Cruz</h6>
      
             <Navbar/>
             <ItemDetailContainer/>    
    {/*         <ItemListContainer />   
             
         </div>
      </div>
   );
}

export default App;
*/

import './styles.css';
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
