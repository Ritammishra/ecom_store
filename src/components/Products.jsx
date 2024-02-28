import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(
                (res) => {
                    console.log(res.data);
                    setProducts([...products, ...res.data])
                }
            )
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#0E2A47", justifyContent: "center" }}>
                {
                    products.map((items, index) => (
                        <div class=" w-80 p-4 m-2 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mt-4">
                            <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={items.image} />
                            <div class="text-gray-800 p-4">
                                <h2 class="text-xl truncate font-semibold">{items.title}</h2>
                                <p class="truncate">{items.description}</p>
                                <p class="truncate text-xl">${items.price}</p>
                                <div class="flex justify-between items-center mt-4">
                                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
} 