import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import driedFruit4 from "../assets/driedfruit4.jpg";
import driedFruit2 from "../assets/driedfruit2.jpg";
import driedFruit1 from "../assets/driedfruit1.jpg";
import Button from "../Components/Shared/Button";
import CartItem from "../Components/CartItem/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black pt-10">
            Shopping Cart
          </h2>
      { cartItems ? 
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[260px] lg:pl-44 text-center">
                Quantity
              </span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>
            <CartItem/>
            <CartItem/>
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ₹360.00
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200"></div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                ₹360.00
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
              <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                Continue Shopping
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Checkout Order
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section> : <div className=" h-screen pt-10">
            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
              No Items Found In Cart
            </h2>
          </div>}
      <Footer />
    </>
  );
};

export default Cart;
