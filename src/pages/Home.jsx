import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="product mb-10 mt-10">
        <div className="flex justify-center text-center flex-col">
          <h1 className=" text-3xl font-bold mb-2">Trendings Products</h1>
          <p>
            Check the hottest products of the week. These rising stars are worth
            your attention.
          </p>
        </div>
      </section>

      {/* __________Products_____________ */}
      <Products />
    </>
  );
};

export default Home;
