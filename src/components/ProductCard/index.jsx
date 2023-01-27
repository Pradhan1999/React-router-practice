import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow1.gif";

const ProductCard = (props) => {
  const navigate = useNavigate();
  // console.log(props);
  console.log("props", props);
  return (
    <div>
      <div className="max-w-[22rem] h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#c9c6c6]">
        <img
          className="w-full h-[10rem] "
          src={props.images}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 h-[60px] ">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="flex justify-end px-5 ">
          <button className="border border-blue-500 w-10 rounded-full cursor-pointer">
            <img
              src={arrow}
              alt="arrow"
              onClick={() => navigate(`/products/${props.id}`)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
