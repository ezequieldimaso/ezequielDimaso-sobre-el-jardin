import React from 'react'
import Cards from '../cards/Cards'

const ItemDetail = ({detail}) => {
  return (
    <div>
        {detail.map((plantas) =><Cards key={plantas.id}/>)}
        
    </div>
  )
}

export default ItemDetail