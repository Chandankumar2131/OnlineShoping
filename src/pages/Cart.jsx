import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-1/3 h-fit">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-2">Total Items: <span className="font-semibold">{cart.length}</span></p>
            <p className="mb-6">Total Amount: <span className="font-semibold">${totalAmount.toFixed(2)}</span></p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h1>
          <Link to={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
