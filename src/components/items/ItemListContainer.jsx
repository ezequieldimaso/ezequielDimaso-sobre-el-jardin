import React, {useState ,useEffect} from 'react'
import"../items/Items.css"
import ItemDetailContainer from '../mocks/ItemDetailContainer'
import ItemList from '../items/Itemlist'

const productos=[
  {id:"01", nombre:"Cintas. Mala madre. Chlorophytum Comosum",precio:1200,descripcion: "herbácea perenne", foto:"/imagenes/planta.jpg"},
  {id:"02", nombre:"Palo de Brasil. Palo de Agua. Dracena Deremensis",precio:1500,descripcion: "Asparagaceae", foto:"/imagenes/planta2.jpg"},
  {id:"03", nombre:"Bambú de la suerte. Dracaena sanderiana",precio:1300,descripcion: "agaváceas", foto:"/imagenes/planta3.jpg"}  
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

  useEffect(()=>{
    obtenerProductos
    .then((res) => setProdus(res))
    .catch((err)=> console.log("error",err))
  })
  
  return (
    <div>
      <p className='mensaje'>{mensaje}</p>
      <div>
        <ItemList lista ={produs}/>
      </div>
      <div>
        <ItemDetailContainer listaProductos={setProdus}/>
      </div>
    </div>
  )
}

export default ItemListContainer