import React from 'react'
import ItemCount from '../items/ItemCount'
import "./detail.css"

const onAdd = ()=>{
  console.log("agrego productos al carrito")
}


export const ItemDetail = ({foto, nombre ,descripcion ,precio}) => {
  return (

        <div className='detalleContainer'>
          <img  className="imgDetail img-thumbnail" src={foto}alt='planta'/>
            {/* <div id="carouselExampleControls" className="carousel slide carrusel" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img  className="imgDetail img-thumbnail" src={foto}alt='planta'/>
                </div>
                <div class="carousel-item">
                  <img  className="imgDetail img-thumbnail" src={foto}alt='planta'/>
                </div>
                <div class="carousel-item">
                <img  className="imgDetail img-thumbnail" src={foto}alt='planta'/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btnSpan" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon btnSpan" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> */}
            <div >
                <div>
                    <div className='title'>
                      <h2 >{nombre}</h2>
                    </div>
                    <div className="card-body">
                      <h3 className="price">${precio}</h3>
                      <p  className='textDescripcion'>{descripcion}</p>
                    </div>
                </div>
                  <ItemCount stock={5} initial={1} onAdd={onAdd} />
                </div>
                <div>
                
                
            </div>
          </div>
   
  )
}

export default ItemDetail