import React from "react";

const Cart = () => {

    return(
        <>
            <section>
                <div>
                    <h1>Shoping Cart</h1>
                </div>
                <div className="flex justify-center mt-6 ">
                    <div className="bg-gray-200 w-3/6 ">
                        <div className="p-2 flex justify-between">
                           <div className="flex">
                           <div>
                                <img className="w-36" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" />
                            </div>
                            <div className="p-2">
                                <h1>Title</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Price $11</p>
                            </div>
                           </div>
                           <div className="flex mr-6 mt-6">
                           <div className="mr-36">
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div>
                            <i className="fa-solid fa-x text-black"></i>
                            </div>
                           </div>
                        </div>
                        <div className="p-2 flex justify-between">
                           <div className="flex">
                           <div>
                                <img className="w-36" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" />
                            </div>
                            <div className="p-2">
                                <h1>Title</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Price $11</p>
                            </div>
                           </div>
                           <div className="flex mr-6 mt-6">
                           <div className="mr-36">
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div>
                            <i className="fa-solid fa-x text-black"></i>
                            </div>
                           </div>
                        </div>
                    </div> 
                    <div className="bg-gray-2 00 w-2/6 ml-2 flex flex-col justify-center">
                        <h2 className="text-xl ml-2">Oder Summary</h2>
                        <div >
                        <div className="my-4 ml-2">
                        <p>Subtotal: $99.00</p>
                        <p>Shippiing estimate: $5.00</p>
                        <p>Tax estimate: $8.32</p>
                        <p>Oder total: $112.32</p>
                        </div>
                        <div>
                        <button className="bg-blue-600 w-96 text-white h-11">Checkout</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;