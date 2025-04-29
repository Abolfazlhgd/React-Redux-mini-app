import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";

function Card() {
  const card = useSelector((store) => store);
  console.log(card);
  const dispatch = useDispatch();
  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };
  const total = card.reduce(addition, 0);
  return (
    <>
      <Navbar />
      <div className="card flex flex-col items-center m-3">
        {card.map((item) => {
          // item.quantity = 1;
          return (
            <div
              className="card-item border w-1/2 bg-red-400 rounded-md p-3"
              key={item.id}
            >
              <img src={item.image} className="size-60 rounded-md" alt="" />
              <div className="card-item-text text-center">
                <div className="product-item-info flex justify-between">
                  <h4 className="font-semibold">{item.title}</h4>
                  <h5 className="font-mono">price: {item.price}$</h5>
                  <h5 className="font-mono">
                    total: {item.price * item.quantity}$
                  </h5>
                  <button
                    className="bg-red-600 px-2 py-1 rounded-md text-white hover:bg-red-700 transition-all"
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    Remove
                  </button>
                </div>
                <div className="add flex gap-2 justify-end mt-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                    className="increase-btn bg-red-600 text-white rounded-md px-2 hover:bg-red-700 transition-all"
                  >
                    +
                  </button>
                  <span>Numbers: {item.quantity}</span>
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                    className="decrease-btn bg-red-600 text-white rounded-md px-2 hover:bg-red-700 transition-all"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-value flex items-center justify-center p-1 bg-red-500 rounded-sm w-1/3 mx-auto">
        <p className="font-semibold text-white">total: {total} $</p>
      </div>
    </>
  );
}

export default Card;
