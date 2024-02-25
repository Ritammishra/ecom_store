import axios  from "axios";
import React, { useEffect, useState } from "react";

export default function Products(){
    const[products, setProducts] = useState();

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(
            (res)=>{
                console.log(res.data);
            }
        )
        .catch((err)=>console.log(err))
    },[])

    return(
       <>
       </>
    )
} 