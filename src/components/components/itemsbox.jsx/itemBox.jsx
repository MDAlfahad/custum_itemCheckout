import React from "react";

const itemBox = ({}) => {
  return (
    <div className="flex items-center justify-between bg-white/20 border-black/30 px-4 py-2 ">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-semibold text-lg">itemName</h1>
        <p className="text-sm font-lighter">Item description</p>
        <p className="font-bold text-lg">price</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="border border-black/30 p-1 rounded-full">delete</h3>
        <div className="flex items-center border border-black/30 rounded-sm text-lg">
          <span>-</span>
          <p>0</p>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default itemBox;
