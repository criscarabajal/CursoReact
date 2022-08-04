import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';



const ItemDetail = ({productDetail}) => {
console.log(productDetail);


const {title,price,description,image} = productDetail;

const [cart, setCart] = useState(true);
const {addItem} = useContext(CartContext);


function onAddEvent (n) {
  setCart(false);
  addItem({...productDetail, quantity: n});
}

  return (
    <div>
      <div className="card flex flex-row my-20">
        <figure>
          <img className="w-2/4" src={image} alt="Imagen" />
        </figure>
        <div className="card-body flex flex-col justify-start">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="w-2/4 my-10">{description}</p>
          <p className="text-2xl text-emerald-400">{price}</p>
          <div className="card-actions justify-start">
            {cart ? (
              <ItemCount
                stock={5}
                initial={1}
                onAdd={(n) => {
                  onAddEvent(n);
                  alert("El producto se agrego al carrito");
                  console.log(n);
                }}
              />
            ) : (
              <Link to="/cart" className="btn btn-primary">
                Ver Carrito
              </Link>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default ItemDetail;