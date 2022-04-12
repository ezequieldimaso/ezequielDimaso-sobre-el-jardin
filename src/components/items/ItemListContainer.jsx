import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../../utils/Firebase';
import { collection, getDocs, query, where } from "firebase/firestore"
import"../items/Items.css"
import ItemList from './Itemlist'
import slide1 from "../../assets/img/slide1.jpg"
import slide2 from "../../assets/img/slide2.jpg"
import slide3 from "../../assets/img/slide3.jpg"
import spinner from "../../assets/img/spinner.gif"
const ItemListContainer = ({mensaje, mensaje2}) => {
  const [produs, setProdus]= useState([])
  const [loading, setLoading] = useState(false)

const {categoryId} =useParams()

  useEffect(()=>{
    setLoading(true)

    const productosRef = collection(db, 'items')
    const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
    
    getDocs(q)
        .then((resp) => {
            setProdus( resp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        .finally(() => {
            setLoading(false)
        })
    
  },[categoryId])
  
  return (
    <div>
      <p className='mensaje'>{mensaje}</p>
      <div>
            {
              loading 
                  ? <h2 className='loading'><img src={spinner} alt="spinner" /></h2> 
                    :<div>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img src={slide1} className="d-block w-100" alt="maceta"/>
                                  </div>
                                  <div className="carousel-item ">
                                    <img src={slide2} className="d-block w-100" alt="maceta"/>
                                  </div>
                                  <div className="carousel-item ">
                                    <img src={slide3} className="d-block w-100" alt="maceta"/>
                                  </div>
                                </div>
                                <button className="carousel-control-prev btn " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div>
                              <h2 className='text-center mt-5'>Productos destacados</h2>
                                <ItemList productos ={produs}/>
                            </div>
                    </div>
                
            }
      </div>
    </div>
  )
}

export default ItemListContainer