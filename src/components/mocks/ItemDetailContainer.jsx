import React, { useEffect, useState } from 'react'
// import { getPlantas } from './api'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({listaProductos}) => {
   const[plantas, setPlantas]= useState([])
   
  //  const obtenerPlanta = ()=>{
  //    getPlantas()
  //    .then((result)=>result.json())
  //    .then((plantas)=>{
  //      console.log(plantas.result)
  //      setPlantas(plantas.result)
  //    })
  
    useEffect(()=>{
      fetch("https://62310d2b05f5f4d40d7294df.mockapi.io/productos")
      .then((res)=>res.jason())
      .then((data)=>setPlantas(data))
      .catch((error)=>console.log(error))
     

    })
  
  
  return (
    <div>
         {/* <button className='bg-red-600 text-white font-bold p-2 m-3 rounded ' onClick={obtenerPlanta}>Ver Planta </button>  */}
        <ItemDetail itemd={plantas}/>
    </div>
  )
}

export default ItemDetailContainer