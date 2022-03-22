import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from "./components/items/ItemListContainer"
import Navbar from "./components/NavBar/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ItemDetailContainer from "./components/ItemsDetails/ItemDetailContainer";
import Contacto from "./components/contacto/Contacto";
import Error404 from "./components/paginaError/Error404";





function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Proximamente novedades!!!"/>}/>
        <Route path="productos/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={ <Contacto/>}/>

        <Route path="*" element={<Error404/>}/>
        
        



      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
