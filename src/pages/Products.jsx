import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import Card from "../components/Card";

export const ProductDataContext = createContext();

const Products = () => {
  // State for storing the products from the dummy JSON data
  const [products, setProducts] = useState([]);
  // console.log("cartItems :>> ", cartItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        const data = response?.data?.products;
        setProducts(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // Function for adding a product to the cart
  const handleAddProduct = () => {
    // function
  };

  // loading button
  if (loading) {
    return (
      <>
        <div>
          <div className="flex justify-center items-center mt-10">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span className="visually-hidden">==</span>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {products?.map((item, id) => (
          <ProductDataContext.Provider value={item} key={id}>
            <Card />
          </ProductDataContext.Provider>
        ))}
      </div>
    </div>
  );
};

export default Products;
