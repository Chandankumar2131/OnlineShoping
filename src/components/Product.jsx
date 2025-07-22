import React, { useState } from 'react'

export default function Product({post}) {
    const[selected,setSelected]=useState(false)
  return (
    <div>
         <img
        src={post.image}
        alt={post.title}
        className="h-48 w-full object-contain mb-4"
      />
        <div>{post.title}</div>
         <div>{post.description}</div>
          <div>{post.price}</div>
          <div>
            <button>
                {
                   selected ? <p>Remove Item</p>:
                   <p>Add to Cart</p>
                }
            </button>
          </div>
    </div>
  )
}
