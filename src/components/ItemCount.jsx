import React, { useState } from 'react'
import planta from './imagenes/planta.jpg'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumar = ()=>{
        if(count < stock){
            setCount(count +1)
        }
    }
    const restar = ()=>{
        if (count > 0) {
            setCount(count -1)
        }
    }

  return (
    <div className='counter'>
        <div className="card">
            <img src={planta}/>
            <div className='cardContainer'>
                <div className="card-body ">
                    <h4 className="card-text">Cintas. Mala madre. Chlorophytum comosum</h4>
                </div>
            
                <div>
                    <button onClick={restar}>-</button>
                    <span>{count}</span>
                    <button onClick={sumar}>+</button>
                </div>
                <div>
                    <br />
                    <button onClick={onAdd}>Agregar al carrito</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCount