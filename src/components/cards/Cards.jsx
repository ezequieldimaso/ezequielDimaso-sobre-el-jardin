import "../cards/Cards.css"
import { Link } from 'react-router-dom'

const Cards = ({foto, nombre, precio, id}) => {

  return (
    <div className="card">
            <img className='img' src={foto}alt='planta'/>
            <div className='cardContainer'>
                <div>
                  <h5 className="card-text">{nombre}</h5>
                  <p className="card-text">${precio}</p>
                  <div className='verMas '>
                    <Link to={`/detail/${id}`}><button className='btn btn-secondary verMas'>Ver mas</button></Link>
                  </div> 
                </div>
            </div>
    </div>
  )
}

export default Cards