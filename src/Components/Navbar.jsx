import React from "react";
import { Link } from "react-router-dom";
import { IoBasket, IoHome } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const Card = useSelector((store) => store);
  console.log(Card);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-red-600">
        <Link to="/card" className="flex">
          <IoBasket className="size-7 text-white" />
          <span className="number-of-product text-red-700 bg-white rounded-full h-5 w-5 p-2 flex justify-center items-center">
            {Card.length}
          </span>
        </Link>
        <Link to="/">
          <IoHome className="size-7 text-white" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
