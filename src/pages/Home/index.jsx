import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log("🚀 ~ file: index.jsx:10 ~ Home ~ cartItems", cartItems);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // console.log(response);
        const data = response?.data?.products;
        setCartItems(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
          {/* {cartItems.map((item) => {
            <> */}
          <ProductCard cartItems={cartItems} />
          {/* </>; */}
          {/* })} */}
        </div>
      </section>
    </>
  );
};

export default Home;
