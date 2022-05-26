import './styles.css';
import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {

   const audiencia = {
           tipo : "viajero",
   } 

   return (
      <div className="App">
         <div className = "borde"> 
             <h6>Curso React en Coder - Profesor Conrado Lanusse - Alumno: Helvio Cruz</h6>
      
             <Navbar/>
             <ItemListContainer nombre={audiencia.tipo}/>
             
         </div>
      </div>
   );
}

export default App;
