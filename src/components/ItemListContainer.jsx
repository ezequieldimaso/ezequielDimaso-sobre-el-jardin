import React from 'react'
import ItemCount from './ItemCount'


const onAdd = ()=>{
  console.log("agrego productos al carrito")
}

const ItemListContainer = ({mensaje}) => {
  return (
    <div>
        <p>{mensaje}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer