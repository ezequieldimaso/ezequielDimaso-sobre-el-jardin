import React from 'react'
import Cards from '../cards/Cards'

export const ItemDetail = ({itemd}) => {
  return (
    <div>
        {itemd.map((plantas) =><Cards key={plantas.id} plantas={plantas.nombre}/>)}
        
    </div>
  )
}

export default ItemDetail