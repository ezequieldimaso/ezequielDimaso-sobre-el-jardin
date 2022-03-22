import React from 'react'
import { Link } from 'react-router-dom'

const ItemCount =  ({max = 10, cantidad, setCantidad, onAdd}) => {
     
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    return (
        <div>
            <div className='counter'>
                <button className="btn btn-success btn-sm" onClick={handleRestar}>-</button>
                <span className="mx-3 btn btn-light">{cantidad}</span>
                <button className="btn btn-success btn-sm" onClick={handleSumar}>+</button>
                <br/>
                <button className="btn btn-info fw-bold texto add" onClick={onAdd}>Agregar al carrito</button>
                <Link to="/cart"><button className='btn btn-warning cart'>Terminar compra</button></Link>
            </div>
       </div>
    )
}


export default ItemCount