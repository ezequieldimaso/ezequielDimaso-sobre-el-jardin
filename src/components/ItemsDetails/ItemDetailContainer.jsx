import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {db} from '../../utils/Firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
   const[planta, setPlanta]= useState(false)
   const[loading, setLoading]= useState(null)
  
  
   const {itemId}= useParams()

  useEffect(() =>{
      setLoading(true)
     
      const docRef = doc(db, "items", itemId)
      getDoc(docRef)
          .then((doc) => {
              setPlanta({id: doc.id, ...doc.data()})
          })
          .finally(()=> {
              setLoading(false)
          })
  },[])
  
  return (
    <div>
      {
        loading
        ? <h2 className='loading'>Cargando..</h2>
        :<ItemDetail {...planta}/>
    
      }
       
    </div>
  )
}

export default ItemDetailContainer