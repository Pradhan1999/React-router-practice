import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/home2.gif";
import Cart from "../../assets/cart.gif";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // // Make a request for a user with a given ID
  // axios
  //   .get("/user?ID=12345")
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  return (
    <nav className=" bg-white sticky top-0 border-b border-blue-500">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-2 w-auto flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-14" />
        </div>
        <ul className="flex uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <img src={Cart} alt="logo" className="cursor-pointer h-14" />
      </div>
    </nav>
  );
};

export default Navbar;
