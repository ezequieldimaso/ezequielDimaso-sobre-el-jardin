import { createContext, useState } from "react"

export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const agregarAlCarrito =(item) =>{
      const itemInCart = cart.find((prod) => prod.id  === item.id);
      if(itemInCart){
        const cartUploaded = cart.map((prod) =>{
          if(prod.id === item.id){
            return {...prod, cantidad: item.cantidad + prod.cantidad}
          }else{
            return prod
          }
        } )
       setCart(cartUploaded)
      }else{
        setCart([...cart, item]);
      }
    }

    const isInCart = (id) => {
      return cart.some((produs) => produs.id === id)
    }

    const cantidadCart = () => {
      return cart.reduce((acc, produs) => acc + produs.cantidad, 0)
    }

    const totalCart = () => {
      return cart.reduce((acc, produs) => acc + produs.cantidad * produs.precio, 0)
    }

    const vaciarCart = () => {
        setCart([])
    }

    const eliminarItem = (id) => {
        setCart( cart.filter((produs) => produs.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            cantidadCart,
            totalCart,
            vaciarCart,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}