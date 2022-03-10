import React, { useState } from 'react'
import ItemCount from "../items/ItemCount"
import Cards from "../cards/Cards"
import "../cards/Cards.css"
import "../items/Items.css"



const onAdd = ()=>{
  console.log("agrego productos al carrito")
}

function imprimirProductos (){
  return new Promise((resolve ,reject)=>{

    setTimeout(()=>{
      let productos=[
        {nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne"},
        {nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne"},
        {nombre:"Cintas. Mala madre. Chlorophytum comosum",precio:1200,descripcion: "herbácea perenne"}  
      ]
      if(productos.length === 0){
        reject("error arreglo vacio")
      }else{
        resolve(productos)
      }
    },3000)
  }
)}

imprimirProductos()
.then((productos)=>{
  console.log(productos)
})
.catch((err)=>{
  console.log(err)
})

const ItemListContainer = ({mensaje}) => {
  return (
    <div>
        <p className='mensaje'>{mensaje}</p>
        <div>
          <Cards/>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemListContainer