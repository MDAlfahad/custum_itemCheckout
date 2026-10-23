import React, { useState } from "react";

const ItemBoxAdded = ({id, productName,brand, specification, stoke, price }) => {
  const [value, setValue] = useState(1);

  const handleIncrese = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-between pl-10 border-t border-black/20 text-sm">
        <div className="font-regular max-w-[200px] line-clamp-1 text-gray-600">{id}</div>
        <div className="font-regular">{productName}</div>
        <div className="font-regular">{brand}</div>

        <div className="max-w-[200px] line-clamp-1 text-gray-600">
          {specification}
        </div>
        <div className="max-w-[200px] line-clamp-1 text-gray-600">
          {stoke}
        </div>

        <div>
          <span>₹</span>{price}
        </div>

      </div>

      <div>
        <table></table>
      </div>
    </div>
  );
};

export default ItemBoxAdded;
