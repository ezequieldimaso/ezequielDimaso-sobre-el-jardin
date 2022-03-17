import React from 'react'
import Cards from '../cards/Cards'
import "../cards/Cards.css"


 const ItemList = ({lista}) => {
  return (
    <div className='cardLoading'>
      {lista.map((produs) => <Cards key={produs.id} produs={produs}/>)}
    </div>
  )
}

export default  ItemList