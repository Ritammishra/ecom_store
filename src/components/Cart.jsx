import React from "react";
import productsDetailsContext from "./productDeatilscontext";
import { useContext } from "react";

const Cart = () => {

    const {selectedItems} = useContext(productsDetailsContext)
    console.log("Items",selectedItems);
    console.log(typeof(selectedItems));
    console.log(Array.isArray(selectedItems));
    return(
        <>
            <section>
                <div>
                    <h1>Shoping Cart</h1>
                </div>
                <div className="flex justify-center mt-6 ">
                     {
                     selectedItems !== undefined && selectedItems.map((items, index)=> {return 1})}
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