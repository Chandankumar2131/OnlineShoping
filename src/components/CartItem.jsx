import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeCartFromItem = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from the Cart");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex gap-6 items-center hover:scale-[1.02] transition mb-4">
      
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-green-600">${item.price}</p>
          <button
            onClick={removeCartFromItem}
            className="text-red-500 hover:text-red-700 text-2xl"
            title="Remove item"
          >
            <FcDeleteDatabase />
          </button>
        </div>
      </div>
    </div>
  );
}
