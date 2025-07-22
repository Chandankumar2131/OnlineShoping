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
     ;

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
     console.log(posts)
  }, []);

  return(
    <div>
        {
    loading ? (<p>Loading...</p>):
    posts.length>0?
(<div>
    {
        posts.map((post)=>(
            <Product key={post.id} post={post}/>
        ))
    }
</div>):
<div>
<p>No post left</p>
</div>
}

    </div>
  )
 
}
