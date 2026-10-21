import React, { useState } from "react";

const ItemBoxAdded = () => {

  const [value, setValue] = useState(0)

  const handleIncrese=()=>{
  
   setValue(value+1)
  }
  const handleDecrease =()=>{
    if(value>1){
      setValue(value-1)
    }
  }

  return (
    <div className="w-full ">
      <ul className="w-full flex items-center justify-between bg-white/30 p-1">
        <li>Hp EliteBook G835</li>
        <li className="max-w-[200px] line-clamp-1">
          2026 model hits diffrent insave design
        </li>
        <span className="flex items-center border border-black/30 ">
          <p className="hover:bg-green-200 px-2"
          onClick={handleDecrease}>-</p>
          <li className="border-x border-black/30 px-2">
            {value} <span>(ps)</span>
          </li>
          <p className="hover:bg-green-200 px-2"
          onClick={handleIncrese}>+</p>
        </span>
        <li>
          <span>₹</span>1000
        </li>
        <li
        className="hover:text-red-500 cursor-pointer">remove</li>
      </ul>
    </div>
  );
};

export default ItemBoxAdded;
