import React, {useState ,useEffect} from 'react'
import ItemCount from "../items/ItemCount"
// import Cards from "../cards/Cards"
import "../cards/Cards.css"
import  ItemList from '.ItemList'



const onAdd = ()=>{
  console.log("agrego productos al carrito")
}

const productos=[
  {id:"01", nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne", foto:"/imagenes/planta.jpg"},
  {id:"02", nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne", foto:"/imagenes/planta.jpg"},
  {id:"03", nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne", foto:"/imagenes/planta.jpg"}  
  ]

const obtenerProductos= new Promise((resolve ,reject)=>{
  let condition= true
  if(condition){
    setTimeout(()=>{
      resolve(productos)
    },3000)
  }else{
    reject("error 404 - no se encontraron los productos")
  }
})

const ItemListContainer = ({mensaje}) => {
  const [produs, setProdus]= useState([])
  const[loading, setLoading]= useState(true)


  useEffect(()=>{
    obtenerProductos
    .then((res) => setProdus(res))
    .catch((err)=> console.log("error",err))
    .finally(() => setLoading(false))
  },[])
  
  

  return (
    <div>
        <p className='mensaje'>{mensaje}</p>
        <div>
          <ItemList productos= {produs/loading}/>
          {/* {loading ? <p>Cargando...</p>
          :
          produs.map((produs) => <Cards key={produs.id} produs={produs}/>)}
           */}
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemListContainer