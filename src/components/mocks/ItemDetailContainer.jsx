import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({listaProductos}) => {
   const[planta, setPlanta]= useState([])
  
  
  useEffect(() =>{
    listaProductos
    .then((res)=> {
      setPlanta(res.find((plant)=> plant.id ==="01"))
    })
    .catch((error) => console.log(error))
  },[])
  
  return (
    <div>
         {/* <button className='bg-red-600 text-white font-bold p-2 m-3 rounded ' onClick={obtenerPlanta}>Ver Planta </button>  */}
        <ItemDetail itemd={planta}/>
    </div>
  )
}

export default ItemDetailContainer