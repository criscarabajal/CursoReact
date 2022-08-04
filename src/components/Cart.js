import React, {useContext} from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'



const CartProduct = ({ title, price, image, quantity, id, description }) => {

  const { deleteItem } = useContext(CartContext)

  const borrar = () => {
      deleteItem(id)
  }

  return (
    <div className='flex flex-col my-10'>
      <div className='flex justify-between ml-10 bg-slate-600 py-2'>
        <span>Producto</span>
        <span>Cantidad</span>
        <span className='mr-14'>Precio</span>
      </div>
      <div className='flex justify-between my-8'>
        <div class="avatar ml-10 w-1/3">
          <div class="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
          <span className='ml-5'>{title} </span>
        </div>
        
        <span className='w-1/3'>{quantity} </span>
        <span className='mr-14'>{quantity * price} </span>
      </div>
    </div>
     

  )

}


const Cart = () => {
  const {cart, totalItems, totalPrice, removeAll} = useContext(CartContext)
  

  return (
    <div>
      
      {cart.map((item) => (
        <CartProduct
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      ))}
      {cart.length > 0 &&
              <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold shadow-xl bg-slate-600">
                <div className="grid h-20 flex-grow rounded-box place-items-center">Total de productos: {totalItems}</div>
                <div className="grid h-20 flex-grow rounded-box place-items-center">Total: ${totalPrice}</div>
              </div>}

      <div className="mt-10 text-center">
        {cart.length > 0 ? (
          <button className="btn btn-primary btn-block w-48 mb-32" onClick={removeAll}>
            Borrar productos
          </button>
        ) : (
          <Link to="../Productos">
            <h1>No hay nada en tu carrito</h1>
            <button
              className="btn btn-primary btn-block w-48 mb-32"
              onClick={removeAll}
            >
              Comprar productos
            </button>
          </Link>
        )}
      </div>
      
      
    </div>
  );
}

export default Cart