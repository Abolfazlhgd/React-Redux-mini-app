import React from "react";
import Navbar from "./Navbar";
import { Data } from "../Data/data";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const card = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="products flex flex-wrap gap-5 m-3">
        {Data.map((item) => {
          return (
            <div
              className="product-item border bg-red-400 rounded-md p-3 shadow-md"
              key={item.id}
            >
              <img src={item.image} className="size-60 rounded-md" alt="" />
              <div className="product-item-text text-center p-1">
                <div className="product-item-info flex justify-between">
                  <h4 className="font-semibold">{item.title}</h4>
                  <h5 className="font-mono">{item.price}$</h5>
                </div>
                <div className="product-item-info flex justify-end mt-3">
                  <button className="bg-red-600 text-white rounded-md py-1 px-2 hover:bg-red-700 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
