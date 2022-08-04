import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        setCount((prevVal) => (prevVal > 0 ? count -1 : count));
    };

    const addToCart = () => {
        onAdd(count);
    }


    return (
        <div className="flex flex-col items-center">
        <div className="flex flex-row my-10" >
            <button className="text-4xl" onClick={restar}>-</button>
            <h3 className="mx-16 text-4xl">{count}</h3>
            <button className="text-4xl" onClick={sumar}>+</button>
        </div>
            <button className="btn btn-primary"
            // onClick={ () => count <= stock && onAdd(count)}
            onClick={addToCart}>
            Agregar al carrito
            </button>
            
        </div>
    )
}

export default ItemCount;