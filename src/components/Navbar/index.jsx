import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/home2.gif";
import Cart from "../../assets/cart.gif";
import NavLinks from "./NavLinks";
import { CartDetailContext } from "../../App";

const Navbar = () => {
  const { cartItems } = useContext(CartDetailContext);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { cartItems } = useContext(CartDetailContext);

  return (
    <nav className=" bg-white sticky top-0 border-b border-blue-500 shadow-xl">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-2 w-auto flex justify-between">
          <Link to="/" onClick={bottomToTop}>
            <img src={Logo} alt="logo" className="md:cursor-pointer h-14" />
          </Link>
        </div>
        <ul className="flex uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              to="/"
              onClick={bottomToTop}
              className="py-7 px-3 inline-block"
            >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="flex flex-row">
          <NavLink to="/cart">
            <img src={Cart} alt="logo" className="cursor-pointer h-14" />
          </NavLink>
          <div className="w-5 h-5 rounded-full bg-blue-400 text-white items-center flex justify-center">
            {cartItems?.length}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
