import React, { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[90vh] bg-gray-100 dark:bg-gray-900 py-10 px-4">
      {loading ? (
        <div className="text-center text-xl text-gray-800 dark:text-gray-200 font-semibold">
          Loading...
        </div>
      ) : posts.length > 0 ? (
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-800 dark:text-gray-200 font-semibold">
          No Products Available
        </div>
      )}
    </div>
  );
}
