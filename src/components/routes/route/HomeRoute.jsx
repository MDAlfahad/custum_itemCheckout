import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import ItemBoxAdded from "../../components/itemsbox/ItemBoxAdded";
import Button from "../../components/button/Button";
const HomeRoute = () => {
  return (
    <div className="flex flex-col px-4 py-4">
      <div className="flex items-center justify-center ">
        <div className=""><h1 className="px-10 text-3xl font-semibold cursor-pointer">FAHAD</h1></div>
        <span className="flex items-center border border-black/30 rounded-sm lg:w-[800px] px-2">
          <input
            type="search"
            placeholder="Get Items Easy"
            className="w-full px-2 py-2 text-xl text-black/70 bg-transparent outline-none"
          />
          <IoSearchOutline className="text-3xl" />
        </span>
        <div className="w-96 flex justify-center px-2">
            <ul className="flex items-center gap-10">
          <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">Home</li>
          <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">Add items</li>
          <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">Bin</li>
          <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">History</li>
        </ul>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 py-4">
        <h4 className="text-center text-3xl">Your Items</h4>
        {/* items listing */}
        <div className="border border-black/40 h-[80vh] overflow-y-auto px-2 py-2">
          <div className="w-full">
            <ul className="w-full px-8 flex items-center justify-between border-b border-black">
              <li className=""> Name</li>
              <li className="">Full description</li>
              <li className="">Quantity</li>
              <li className="">Price </li>
              <li className="">Remark</li>
            </ul>
          </div>
          {/* Added items lists */}

          <div>
            <ItemBoxAdded />
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <Button text="Clear" />
          <Button text="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
