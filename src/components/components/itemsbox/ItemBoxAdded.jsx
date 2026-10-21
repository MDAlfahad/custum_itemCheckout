import React, { useState } from "react";

const ItemBoxAdded = () => {
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
      <div className="w-full flex items-center justify-between pl-10 border-b border-black/20 text-sm">
        <div className="font-medium">G18920658</div>
        <div className="font-medium">Hp EliteBook G835</div>
        <div className="font-medium">HP</div>

        <div className="max-w-[200px] line-clamp-1 text-gray-600">
          2026 model hits different insane design
        </div>

        <div className="flex items-center">
          <button
            onClick={handleDecrease}
            className="hover:bg-green-500 text-lg px-2 cursor-pointer select-none"
          >
            -
          </button>
          <div className=" border-black/30 px-2">
            {value} <span className="text-xs text-gray-500">(pcs)</span>
          </div>
          <button
            onClick={handleIncrese}
            className="hover:bg-green-500 text-lg px-2 cursor-pointer select-none"
          >
            +
          </button>
        </div>

        <div>
          <span>₹</span>1000
        </div>

        <div className="hover:text-red-500 cursor-pointer">remove</div>
      </div>

      <div>
        <table></table>
      </div>
    </div>
  );
};

export default ItemBoxAdded;
