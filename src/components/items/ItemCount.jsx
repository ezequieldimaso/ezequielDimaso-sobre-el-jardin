import React from 'react'
import"../items/Items.css"


const ItemCount =  ({max, min = 0, counter, setCounter, onAdd}) => {
     
    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }
    const reset = ()=>{
        setCounter(1);
    }
    return (
        <div>
            <div className='counter'>
                <button className="btn btn-success btn-sm" disabled={counter===min} onClick={handleRestar}>-</button>
                <span className="mx-3 btn btn-light">{counter}</span>
                <button className="btn btn-success btn-sm"disabled={counter===max} onClick={handleSumar}>+</button>
            <button className="btn btn-success my-2 agregar"disabled={counter===0}  onClick={()=>{onAdd(counter);reset()}}>Agregar al carrito</button>
            
            </div>
       </div>
    )
}


export default ItemCount