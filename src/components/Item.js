import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({product}) => {
  const {id,title,price,description,category,image} = product;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={title} className="rounded-xl"></img>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to={id.toString()}>Ver detalle</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};



export default Item;