import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from "./components/items/ItemListContainer"
import Navbar from "./components/NavBar/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from "./components/mocks/ItemDetailContainer";




function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Proximamente novedades!!!"/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>



      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
