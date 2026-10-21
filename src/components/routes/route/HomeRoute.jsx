import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import ItemBoxAdded from "../../components/itemsbox/ItemBoxAdded";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
const HomeRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-4 py-4">
      <div className="flex items-center justify-center ">
        <div className="">
          <h1 className="px-10 text-3xl font-semibold cursor-pointer">FAHAD</h1>
        </div>
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
            <li
              className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300"
            onClick={()=>navigate("/add-items")}>
              Add items
            </li>
            <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">
              Bin
            </li>
            <li className="text-black/60 hover:text-black cursor-pointer hover:text-lg transition-all duration-300">
              History
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 py-4">
        <h4 className="text-center text-3xl">Your Items</h4>
        {/* items listing */}
        <div className="h-[80vh] border border-black/40">
          <div className="h-[50vh] overflow-y-auto border-y border-black px-2 py-2">
    <ItemBoxAdded />
    <ItemBoxAdded />
    <ItemBoxAdded />
    <ItemBoxAdded />
          </div>
          <div className=" h-[30vh] overflow-y-auto px-2 py-2">
          <div className="w-full">
            <div className="w-full border-b border-black">
              <table className="w-full text-center">
                <thead>
                  <tr>
                    <th className="py-2">Product Id</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Brand</th>
                    <th className="py-2">description</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2 text-end">Price</th>
                    <th className="py-2 text-end">Remark</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          {/* Added items lists */}

          <div className="flex flex-col gap-2">
            <ItemBoxAdded />
            <ItemBoxAdded />
            <ItemBoxAdded />
            <ItemBoxAdded />
            <ItemBoxAdded />
            <ItemBoxAdded />
          </div>
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
