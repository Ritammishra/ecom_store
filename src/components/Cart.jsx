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
                           <div className="flex mr-6">
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
                    <div className="bg-gray-500 w-2/6 ml-2">
                        <h3>Cart component</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;