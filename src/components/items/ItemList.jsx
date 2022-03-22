import Cards from '../cards/Cards'
import "../cards/Cards.css"


 const ItemList = ({productos}) => {
 
  return (
    <div className='cardLoading'>
      {productos.map((produs) => <Cards key={produs.id} {...produs } />)}
    </div>
  )
}

export default  ItemList