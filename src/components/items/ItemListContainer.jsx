import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../base de datos/pedirDatos'
import"../items/Items.css"
import ItemList from './Itemlist'

const ItemListContainer = ({mensaje}) => {
  const [produs, setProdus]= useState([])
  const [loading, setLoading] = useState(false)

const {categoryId} =useParams()

  useEffect(()=>{
    setLoading(true)

    pedirDatos()
    .then((res) =>{ 
      if(!categoryId){
        setProdus(res)
      }else{
        setProdus(res.filter((produs)=>produs.categoria === categoryId))
      }
    })
    .catch((err)=> console.log("error",err)
  )
  .finally(() => {
     setLoading(false)
  })
    
  },[categoryId])
  
  return (
    <div>
      <p className='mensaje'>{mensaje}</p>
      <div>
      {
        loading 
            ? <h2 className='loading'>Cargando...</h2> 
            :<ItemList productos ={produs}/>
      }
      </div>
    </div>
  )
}

export default ItemListContainer