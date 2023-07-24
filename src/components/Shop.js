import React from "react";

const Shop = () => {
  return (
    <div className=" mt-4">
      <h4>Buy Adidas Shoes for 50 Rs.</h4>
      <div
        className="btn-group "
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-dark px-2 py-0">
          -
        </button>
        <button type="button" className="btn btn-secondary px-2 py-0">
          Add to Cart
        </button>
        <button type="button" className="btn btn-dark px-2 py-0">
          +
        </button>
      </div>
    </div>
  );
};

export default Shop;
