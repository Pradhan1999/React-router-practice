import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  // State for storing the items in the cart
  const [cartItems, setCartItems] = useState([]);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setDetails(res?.data));
  }, []);

  const handleAddProduct = (details) => {
    const ProductExist = cartItems.find((item) => item.id === details.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === details.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...details, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="h-64 md:h-80 w-[90%] rounded-lg bg-gray-100 mb-4 flex items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <img
                  src={details.thumbnail}
                  className="h-[90%] w-[90%] rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex-row px-4 ">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {details?.title}
            </h2>
            <div className="text-gray-500 text-sm">
              By
              <div className="text-indigo-600 hover:underline">
                {details?.brand}
              </div>
            </div>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">₨</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {details?.price}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-green-500 text-xl font-semibold">
                  {details?.discountPercentage}% Off
                </div>
                <div className="text-gray-400 text-sm">
                  Inclusive of all Taxes.
                </div>
              </div>
            </div>

            <div className="text-gray-500">{details?.description}</div>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Qty
                </div>
                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={handleAddProduct(details)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
