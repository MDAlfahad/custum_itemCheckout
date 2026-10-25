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
      <div className="w-full flex justify-between border-t border-black/20 text-sm hover:bg-green-500/40 py-1">
        <div className="font-regular w-[200px] line-clamp-1 text-gray-600">{id}</div>
        <div className="font-regular w-[200px] text-start">{productName}</div>
        <div className="font-regular w-[120px] text-start">{brand}</div>

        <div className="w-[300px] line-clamp-1 text-gray-600 ">
          {specification}
        </div>
        <div className="w-[100px] line-clamp-1 text-gray-600">
          {stoke}
        </div>

        <div className="w-[100px] text-end">
          <span >₹</span>{price}
        </div>

      </div>

     
    </div>
  );
};

export default ItemBoxAdded;
