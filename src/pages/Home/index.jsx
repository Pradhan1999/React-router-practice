import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  // console.log("🚀 ~ file: index.jsx:10 ~ Home ~ cartItems", cartItems);
  console.log("cartItems :>> ", cartItems);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // console.log(response);
        const data = response?.data?.products || [];
        setCartItems(data);
        console.log("data", data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="product mb-10">
        <div className="flex justify-center text-center flex-col">
          <h1 className=" text-3xl font-bold">Trendings Products</h1>
          <p>
            Check the hottest products of the week. These rising stars are worth
            your attention.
          </p>
        </div>

        {/* <ProductItems cartItems={cartItems} /> */}
      </section>

      <div className="grid grid-cols-4 gap-5">
        {cartItems?.map((item) => (
          <>
            {/* {item.title} */}
            <ProductCard
              id={item.id}
              title={item.title}
              description={item.description}
              brand={item.brand}
              images={item.thumbnail}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
