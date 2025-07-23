import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function Product({ post }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-xl p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      
      <img
        src={post.image}
        alt={post.title}
        className="h-48 w-full object-contain mb-4"
      />

      <h2 className="text-lg font-semibold mb-2 line-clamp-1">{post.title}</h2>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
        {post.description}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">${post.price}</p>

        {
          cart.some((item) => item.id === post.id) ? (
            <button
              onClick={removeFromCart}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
}
