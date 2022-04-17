import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../../utils/Firebase';
import { collection, getDocs, query, where } from "firebase/firestore"
import"../items/Items.css"
import ItemList from './Itemlist'
import spinner from "../../assets/img/spinner.gif"

const ItemListContainer = ({mensaje}) => {
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
                   : 
                    //           <h2 className='text-center mt-5'>Productos destacados</h2>
                                <ItemList productos ={produs}/>
                            // </div>
                    // </div>
                
            }
      </div>
    </div>
  )
}

export default ItemListContainer