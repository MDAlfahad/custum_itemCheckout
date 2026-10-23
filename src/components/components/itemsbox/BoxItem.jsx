import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Price } from "../component/PriceComponent";

const BoxItem = ({
  name,
  brand,
  price,
  sellingPrice,
  productdesc,
  specification,
  date,
  modifiedDate,
  itemStoke,
  totalUnit,
  onClick,
}) => {
  return (
    <div className="flex items-center justify-between border border-green-500/70 rounded-lg px-4 py-1 text-sm">
      <div className="flex flex-col gap-1">
        <span className="flex items-center font-semibold">
          Name:<h1 className="font-medium">{name}</h1>
        </span>
        <span className="flex items-center font-semibold">
          Brand: <p className="font-light">{brand}</p>
        </span>
        <span className="flex items-center font-semibold">
          Trade Amount:₹{" "}
          <h1 className="font-light">
            {<Price amount={price} currency="INR" locale="en-IN" />}
          </h1>
        </span>
        <span className="flex items-center font-semibold">
          Selling Amount:₹{" "}
          <h3 className="font-light">
            {<Price amount={sellingPrice} currency="INR" locale="en-IN" />}
          </h3>
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="flex  font-semibold">
          Description: <p className="font-light max-w-96">{productdesc}</p>
        </span>
        <span className="flex font-semibold">
          Specification: <p className="font-light max-w-96">{specification}</p>
        </span>
        <span className="flex items-center  font-semibold">
          Date: <p className="font-light">{date}</p>
        </span>
        <span className="flex items-center  font-semibold">
          Modified Date: <p className="font-light">{modifiedDate}</p>
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="flex items-center font-semibold">
          In Stoke:
          <h1 className="font-light">{itemStoke}</h1>
        </span>
        <span className="flex items-center font-semibold">
          Total Unit:<h1 className="font-light">{totalUnit}</h1>
        </span>
        <button
          className="border border-black/50 rounded-sm py-1 px-2 hover:bg-green-500/80
      "
        >
          EDIT
        </button>
        <button
          className="border border-black/50 rounded-sm py-1 px-2 bg-green-500/60 hover:bg-red-500/80"
          onClick={onClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BoxItem;
