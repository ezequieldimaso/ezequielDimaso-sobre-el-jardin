import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../base de datos/pedirDatos'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
   const[planta, setPlanta]= useState()
   const[loading, setLoading]= useState(true)
  
  
   const {itemId}= useParams()

  useEffect(() =>{
      setLoading(true)
      pedirDatos()
      .then((res)=> {
        setPlanta(res.find((plant)=> plant.id ===itemId))
        
      })
      .catch((error) => console.log(error))
      .finally(()=>{
        setLoading(false)
      
      })
  },[])
  
  return (
    <div>
      {
        loading
        ? <h2 className='loading'>Cargando..</h2>
        :<ItemDetail {...planta}/>
    
      }
       
    </div>
  )
}

export default ItemDetailContainer