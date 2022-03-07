import React from 'react'
import ItemCount from './ItemCount'
import Cards from './NavBar/Cards'


const onAdd = ()=>{
  console.log("agrego productos al carrito")
}

const ItemListContainer = ({mensaje}) => {
  return (
    <div>
        <p>{mensaje}</p>
        <div>
          <Cards/>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemListContainer