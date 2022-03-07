import React from 'react'
import planta from "../imagenes/planta.jpg"

const Cards = () => {
  return (
    <div className="card">
            <img src={planta}/>
            <div className='cardContainer'>
                <div className="card-body ">
                    <h4 className="card-text">Cintas. Mala madre. Chlorophytum comosum</h4>
                </div>
            </div>
    </div>
  )
}

export default Cards