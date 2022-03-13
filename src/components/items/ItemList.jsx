import React from 'react'
import Cards from '../cards/Cards'




const ItemList = ({produs ,loading}) => {
  
  return (
    <div>
         {loading ? <p>Cargando...</p>
          :
          produs.map((produs) => <Cards key={produs.id} produs={produs}/>)}
          
    </div>
  )
}

export default ItemList