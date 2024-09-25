import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    let data = await fetch("https://dummyjson.com/products?limit=20");
    let json = await data.json();
    setProducts(json?.products);
  }

  return (
    <div>
      <h2>List of products</h2>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Product
                id={product?.id}
                title={product?.title}
                image={product?.images?.[0]}
                price={product?.price}
                btn={"add to cart"}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
