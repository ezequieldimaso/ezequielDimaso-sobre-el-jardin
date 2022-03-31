import React from 'react'


const ItemCount =  ({max, min = 0, counter, setCounter}) => {
     
    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }
    return (
        <div>
            <div className='counter'>
                <button className="btn btn-success btn-sm" disabled={counter===min} onClick={handleRestar}>-</button>
                <span className="mx-3 btn btn-light">{counter}</span>
                <button className="btn btn-success btn-sm"disabled={counter===max} onClick={handleSumar}>+</button>
                
            </div>
       </div>
    )
}


export default ItemCount