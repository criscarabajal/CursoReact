
import { createContext, useState } from "react";

const CartContext = createContext();

// Provider de datos

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const itemInCart = (itemId) => {
        const exist = cart.find(el => el.id === itemId)
        return exist
    }

    const totalItems = cart.map(item => item.quantity).reduce((prev,curr) => prev + curr, 0)
    const totalPrice = cart.map(item => item.price * item.quantity).reduce((prev,curr) => prev + curr, 0)

    // Agregar un nuevo item al carrito

    const addItem = (item) => {
        const exist = itemInCart(item.id)

        if (!exist) {
            setCart([...cart, item])
        } else {
            const itemIndex = cart.findIndex(i => i.id === item.id)
            const itemAdded = cart.slice()
            itemAdded[itemIndex].quantity = itemAdded[itemIndex].quantity + item.quantity
            setCart(itemAdded)
            alert("El producto ya se agrego al carrito")
        }
        }


    // Eliminar un item del carrito

        const deleteItem = (id) => {
            const itemRemoved = cart.filter(el => el.id !== id);
            setCart(itemRemoved);
        };
        
    
    // Borrar todos los items del carrito

        const removeAll = () => {
            setCart([])
        }


        const data = {
            cart,
            addItem,
            itemInCart,
            totalItems,
            totalPrice,
            deleteItem,
            removeAll,
        }

        return (
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        )
    }

    export { CartProvider };
    export default CartContext;