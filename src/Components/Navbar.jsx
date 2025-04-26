import React from "react";
import { Link } from "react-router-dom";
import { IoBasket, IoHome } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-red-600">
        <Link to="/card">
          <IoBasket className="size-7 text-white" />
        </Link>
        <Link to="/">
          <IoHome className="size-7 text-white" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
