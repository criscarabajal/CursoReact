import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getAllProducts } from '../Firebase/Firebase';
import ItemList from './ItemList';




// const getData = new Promise((resolve,reject) => {
//   let afterPromises = true;

//   setTimeout(() => {
//     if (afterPromises) {
//       resolve (producto);
//     } else {
//       reject("Fallo en Get Data")
//     }
//   }, 2000);
// });



// const ItemListConteiner = ({greeting}) => {

//   const [products, setProducts] = useState([]);
//   console.log ("products:", products);
 
//   const { categoryId } = useParams();
//   console.log ("categoryId:", categoryId);

 
  
//   useEffect(() => {
//     getProducts(categoryId)
//       .then((snapshot) => {
//         setProducts(snapshot.docs.map((doc) => {
//           return { id: doc.id, ...doc.data(), };
//       }));
//     });
//   }, [categoryId])

//   return (
//     <div>
      
//         {greeting}
        
//         {/* {loading ? <span>loading...</span> : <ItemList items={products} />} */}
//     </div>
//   )
// }

export const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log("products:", products);
  
  const { categoryId } = useParams();
  console.log("categoryId:", categoryId);

  useEffect(() => {
    getProducts(categoryId)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred while fetching products");
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {products && <ItemList items={products} />}
    </div>
  );
};

export default ItemListConteiner;