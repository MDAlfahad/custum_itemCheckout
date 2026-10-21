import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BinRoute = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col px-4 py-4">
      <div className="flex">
        <span
          className="p-2 rounded-full bg-green-500 border border-black/30 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <IoArrowBack />
        </span>
      </div>
      <div className="w-full h-[90vh] border-y border-black/50 py-2 px-2 my-2 overflow-y-aauto">
      <p className="text-sm text-center">Bin is Empty</p></div>
    </div>
  );
};

export default BinRoute;
