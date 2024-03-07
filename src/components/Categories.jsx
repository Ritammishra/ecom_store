import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Categories(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            console.log(res.data);
            setCategories([...res.data])
        })
        .catch((err)=> console.log(err))
    },
    [])
    return(
        <>
       <ul className="flex ">
        {
            categories.map((items, index)=>(
                <li className="mr-7" key={index}>{items}</li>
            ))
        }
       </ul>
        </>
    )
}