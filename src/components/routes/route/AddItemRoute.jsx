import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import BoxItem from "../../components/itemsbox/BoxItem";

const AddItemRoute = () => {
  const navigate = useNavigate();
  const [showAddBtn, setShowAddBtn] = useState(false);

  const handleShow = () => {
    setShowAddBtn(setShowAddBtn != showAddBtn);
  };
  const handleHide = () => {
    setShowAddBtn(setShowAddBtn == showAddBtn);
  };
  const [productData, setProductData] = useState({
    id: crypto.randomUUID(),
    productname: "",
    brand: "",
    quantity: "",
    units: "",
    productdesc: "",
    specification: "",
    price: "",
    sellingPrice: "",
    gstCode: "",
    gstrate: "",
    itemStoke: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productData.productname ||
      !productData.brand ||
      !productData.quantity ||
      !productData.units ||
      !productData.productdesc ||
      !productData.specification ||
      !productData.price ||
      !productData.sellingPrice ||
      !productData.gstCode ||
      !productData.gstrate ||
      !productData.itemStoke
    ) {
      alert("All field is Required");
      return;
    }
    const exestingData = JSON.parse(localStorage.getItem("products")) || [];

    const update = [...exestingData, productData];

    localStorage.setItem("products", JSON.stringify(update));
    alert("Product Added Successfully");

    window.location.reload();
  };

  const productDataCatch = JSON.parse(localStorage.getItem("products")) || [];
  const DeleteData = (id) => {
    const updatedProducts = productDataCatch.filter((items) => items.id != id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
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
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 items-start w-full text-[14px]"
          >
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="productname"
                  value={productData.productname}
                  onChange={handleChange}
                  placeholder="Product"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product brand</label>
                <input
                  type="text"
                  name="brand"
                  value={productData.brand}
                  onChange={handleChange}
                  placeholder="Brand"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="name">Product Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Units</label>
                <input
                  type="text"
                  name="units"
                  value={productData.units}
                  onChange={handleChange}
                  placeholder="Nos, pcs, kgs, meters"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <label htmlFor="name">Product Description</label>
            <input
              type="text"
              name="productdesc"
              value={productData.productdesc}
              onChange={handleChange}
              placeholder="Description"
              className="w-full px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
            />
            <label htmlFor="name">Product Specification</label>
            <input
              type="text"
              name="specification"
              value={productData.specification}
              onChange={handleChange}
              placeholder="Specification"
              className="w-full px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
            />
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Product Price</label>
                <input
                  type="text"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  placeholder="price"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full ">
                <label htmlFor="name">Selling price</label>
                <input
                  type="text"
                  name="sellingPrice"
                  value={productData.sellingPrice}
                  onChange={handleChange}
                  placeholder="selling price"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">HSN/SAC/GST number</label>
                <input
                  type="text"
                  name="gstCode"
                  value={productData.gstCode}
                  onChange={handleChange}
                  placeholder="HSN/SAC/GST number"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="name">GST Rate</label>
                <input
                  type="number"
                  name="gstrate"
                  value={productData.gstrate}
                  onChange={handleChange}
                  placeholder="GST Rate"
                  className="px-2 py-2 bg-transparent border border-black/50 text-black placeholder-black/50 w-full outline-none"
                />
              </div>
            </div>
            <label htmlFor="name">Items InStoke</label>
            <input
              type="text"
              name="itemStoke"
              value={productData.itemStoke}
              onChange={handleChange}
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
        <div className="flex items-center justify-between h-14">
          <span
            className="p-2 rounded-full bg-green-500 border border-black/30 cursor-pointer hover:p-3 hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/")}
          >
            <IoArrowBack />
          </span>
          <div>
            <Button text="Add Items" onClick={handleShow} />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold  py-2">
            Product Stored Details
          </h1>
        </div>
        <div className=" h-[85vh] flex flex-col gap-2 py-2 overflow-y-auto border-y border-black/50">
          {productDataCatch == "" ? (
            <p className="text-center">
              No Product Added! Click add items to add
            </p>
          ) : (
            ""
          )}

          <div className="flex flex-col gap-2">
            {productDataCatch.map((items) => (
              <BoxItem
                key={items.id}
                id={items.id}
                name={items.productname || ""}
                brand={items.brand || ""}
                price={items.price || "0"}
                sellingPrice={items.sellingPrice || "0"}
                productdesc={items.productdesc || ""}
                specification={items.specification || ""}
                date={items.date || ""}
                modifiedDate={items.modifiedDate || ""}
                itemStoke={items.itemStoke || "0"}
                totalUnit={`${items.quantity} ${items.units}` || "0"}
                onClick={()=>DeleteData(items.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemRoute;
