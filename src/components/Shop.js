import React from "react";

const Shop = () => {
  return (
    <div className=" mt-4">
      <h4>Deposit/Withdraw Money</h4>
      <div
        className="btn-group "
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-dark px-2 py-0">
          -
        </button>
        <button disabled type="button" className="btn btn-secondary px-2 py-0">
          Update Balance
        </button>
        <button type="button" className="btn btn-dark px-2 py-0">
          +
        </button>
      </div>
    </div>
  );
};

export default Shop;
