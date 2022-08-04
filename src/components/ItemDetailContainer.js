import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import producto from '../producto.json';
import { getProductById } from '../Firebase/Firebase';



const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams();
    console.log ("id:", id);

    useEffect(()=>{
      getProductById(id)
        .then((product)=> setItem(product));
    },[id])
    
    // const productDetail = producto.filter((item) => item.id === parseInt(params.id));


    // const getItem = new Promise((resolve,reject) => {
    //   let afterPromises = true;
    //   setTimeout(() => {
    //     if (afterPromises) {
    //       resolve (productDetail);
    //     } else {
    //       reject("Fallo en Get Detail")
    //     }
    //   });
    // });

    // useEffect(() => {
    //   getItem
    //   .then((data) => {
    //     setDetails(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    // }, [params.id] )


  
    return (

      <div>
        {/* {loading ? <span>loading...</span> : 
          details.map((item) => {
            return <ItemDetail key={item.id} productDetail={item} />
          })         
        }  */}

        {item && <ItemDetail productDetail={item} />}
      </div>
    )
}
  
      

  export default ItemDetailContainer;