import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ItemListContainer from "./components/items/ItemListContainer"
import Navbar from "./components/NavBar/Navbar"




function App() {
  return (
    <div className="App container-fluid">
     <Navbar/>
     <ItemListContainer mensaje="Proximamente novedades!!!"/>
    </div>
  );
}

export default App;
