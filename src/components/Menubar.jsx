import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    const [state, setState] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    return (
        <>
            <header className="text-gray-600 body-font bg-blue-700 first-line">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/electronics" className="mr-5 hover:text-gray-900">Electronics</Link>
                        {/* <Link to="/jewelery" className="mr-5 hover:text-gray-900">Jewelery</Link> */}
                        {/* <Link to="/men" className="mr-5 hover:text-gray-900">Men's Clothing</Link> */}
                        {/* <Link to="/women" className="mr-5 hover:text-gray-900">Women's Clothing</Link> */}
                        <Link to="/products" className="mr-5 hover:text-gray-900">Products</Link>
                        {/* <Link to='/categories'  className="mr-5 hover:text-gray-900">Categories</Link> */}
                        <div className="mr-4"><input className="rounded-lg mr-2 p-1" placeholder="Search" type="text"/><i class="fa-solid fa-magnifying-glass"></i></div>
                        <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                    </nav>
                </div>
            </header>
            {isCartOpen && <Cart/>}
        </>
    )
}