import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
// import { products } from "../../assets/data/data";
// import { Heading } from "../../common/Heading";
// import { ProductItems } from "./ProductItems";

const Home = () => {
  // const [cartItems, setCartItems] = useState(products);
  return (
    <>
      <section className="product border border-red-500">
        <div className="flex justify-center text-center flex-col">
          <h1 className=" text-3xl font-bold">Trendings Products</h1>
          <p>
            Check the hottest products of the week. These rising stars are worth
            your attention.
          </p>
        </div>

        {/* <ProductItems cartItems={cartItems} /> */}
        <div className="border border-red-500">
          <ProductCard />
        </div>
      </section>
    </>
  );
};

export default Home;
