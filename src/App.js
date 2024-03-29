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
import Cart from "./components/cart/Cart";
import { CartProvider } from "./components/context/CartContext";
import { Checkout } from "./components/Checkout/Checkout";
import Footer from "./footer/Footer";


function App() {
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Nuestros productos"/>}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={ <Contacto/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error404/>}/> 
        <Route path='/checkout' element={ <Checkout/> } />  
        <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
      {/* hacerfooter */}
     </BrowserRouter>
     <Footer/>
    </div>
    </CartProvider>
  )
}

export default App;
