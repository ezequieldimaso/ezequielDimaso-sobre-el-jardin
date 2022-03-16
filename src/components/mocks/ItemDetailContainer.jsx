import React, { useState } from 'react'
import { getPlantas } from './api'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
   const[plantas, setPlantas]= useState([])
   
   const obtenerPlanta = ()=>{
     getPlantas()
     
     .then((plantas)=>{
       console.log(plantas.result)
       setPlantas(plantas.result)
     })
   }
  return (
    <div>
         <button className='bg-red-600 text-white font-bold p-2 m-3 rounded ' onClick={obtenerPlanta}>Ver Planta </button> 
        <ItemDetail detail={plantas} />
    </div>
  )
}

export default ItemDetailContainer