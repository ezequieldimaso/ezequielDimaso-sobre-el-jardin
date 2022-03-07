import React from 'react'
import ItemCount from "../items/ItemCount"
import Cards from "../cards/Cards"
import "../cards/Cards.css"
import "../items/Items.css"



const onAdd = ()=>{
  console.log("agrego productos al carrito")
}

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