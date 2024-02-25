import axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Products(){
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(
            (res)=>{
                console.log(res.data);
                setProducts([...products, ...res.data])
            }
        )
        .catch((err)=>console.log(err))
    },[])

    return(
       <>
       <h3>Products</h3>
       <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h4>{product.name}</h4>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
       </>
    )
} 