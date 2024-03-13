import React, { useEffect, useState } from "react";
import axios from "axios";
import productsDetailsContext from "./productDeatilscontext";
import Cart from "./Cart";

export default function Heroproducts() {
    const [products, setProducts] = useState([]);
    const [elements, setElements] = useState(8);
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedItems, setSelectedItems] = useState([]);

    console.log("Home",selectedItems);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                const tenitem = res.data.slice(0, elements);
                setProducts(tenitem)
            })
    }, [])

    const loadmore = () => {
        setElements(elements + elements)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddToCart = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className="flex" style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#0E2A47", justifyContent: "center" }}>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex flex-wrap justify-center">
                {
                        filteredProducts.map((item, index) => (
                            <div key={index} className=" w-80 p-4 m-2 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mt-4">
                                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={item.image} />
                                <div className="text-gray-800 p-4">
                                    <h2 className="text-xl truncate font-semibold">{item.title}</h2>
                                    <p className="truncate">{item.description}</p>
                                    <p className="truncate text-xl">${item.price}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <button onClick={() => handleAddToCart(item)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Add Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button onClick={loadmore} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Load More</button>
            </div>
            <productsDetailsContext.Provider value={{selectedItems : selectedItems}}>
                <Cart/>
            </productsDetailsContext.Provider>
        </>
    )
}