import React from "react";
import arrow from "../../assets/arrow1.gif";

const ProductCard = (props) => {
  return (
    <div>
      <div className="max-w-[22rem] rounded-2xl overflow-hidden shadow-lg border border-[#c9c6c6]">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex justify-end px-5">
          <div className="border border-blue-500 w-10 rounded-full">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
