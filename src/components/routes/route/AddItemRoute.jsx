import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../components/button/Button";
import BoxItem from "../../components/itemsbox/BoxItem";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const AddItemRoute = () => {
  const navigate = useNavigate();
  const [showAddBtn, setShowAddBtn] = useState(false);

  const handleShow = () => {
    setShowAddBtn(setShowAddBtn != showAddBtn);
  };
  const handleHide = () => {
    setShowAddBtn(setShowAddBtn == showAddBtn);
  };
  return (
    <>
      <div
        className={`absolute  w-full h-[100vh] bg-green-200/70  flex flex-col items-center justify-center ${showAddBtn ? "block" : "hidden"}`}
      >
        <div className="  w-[1000px] border border-black/50 p-2 bg-green-300  px-2 py-2 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-center">
            Product Details
          </h1>
          <form
            action="submit"
            className="flex flex-col gap-1 items-start w-full text-[14px]"
          >
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  placeholder="Product"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product brand</label>
                <input
                  type="text"
                  placeholder="Brand"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="name">Product Quantity</label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Units</label>
                <input
                  type="text"
                  placeholder="Nos, pcs, kgs, meters"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <label htmlFor="name">Product Description</label>
            <input
              type="text"
              placeholder="Description"
              className="w-full px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
            />
            <label htmlFor="name">Product Specification</label>
            <input
              type="text"
              placeholder="Specification"
              className="w-full px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
            />
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Price</label>
                <input
                  type="text"
                  placeholder="price"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full ">
                <label htmlFor="name">Selling price</label>
                <input
                  type="text"
                  placeholder="selling price"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">HSN/SAC code</label>
                <input
                  type="text"
                  placeholder="HSN/SAC code"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">GST Rate</label>
                <input
                  type="text"
                  placeholder="GST Rate"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <label htmlFor="name">Items InStoke</label>
            <input
              type="text"
              placeholder="Stoke items"
              className="w-full px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
            />
            <div className="flex items-center w-full gap-2">
              <button className="w-full px-6 py-2 text-sm md:text-[16px] border border-black/40 hover:bg-green-400 mt-2">
                ADD
              </button>
            </div>
          </form>
          <button
            className="w-full px-6 py-2 text-sm md:text-[16px] border border-black/40 bg-red-500 hover:bg-red-600"
            onClick={handleHide}
          >
            CANCEL
          </button>
        </div>
      </div>

      {/* items listing  */}
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between py-2">
          <span
            className="p-2 rounded-full bg-green-500 border border-black/30 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoArrowBack />
          </span>
          <div>
            <Button text="Add Items" onClick={handleShow} />
          </div>
        </div>
        <div>
            <h1 className="text-3xl font-semibold  py-2">Product Stored Details</h1>
        </div>
        <div className=" h-[85vh] flex flex-col gap-2 py-2 overflow-y-auto border-y border-black/50">
          <p className="text-center">No Product Added! Click add items to add</p>
        </div>
      </div>
    </>
  );
};

export default AddItemRoute;
