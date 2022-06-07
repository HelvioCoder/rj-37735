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
    {/*         <ItemListContainer />   */}
             
         </div>
      </div>
   );
}

export default App;
