import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ItemBoxAdded from "../../components/itemsbox/ItemBoxAdded";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import AddedItemsBox from "../../components/itemsbox/AddedItemsBox";

const HomeRoute = () => {
  const navigate = useNavigate();

  const productDetails = JSON.parse(localStorage.getItem("products") || "[]");

  const [selectedItems, setSelectedItems] = useState(() =>{
    const saveItem = JSON.parse(localStorage.getItem("selectedItems") || "[]");
    return Array.isArray(saveItem)? saveItem : [];
});


  const addProduct = (product) => {
    const alreadyAdded = selectedItems.some((items) => items.id === product.id);
    if (alreadyAdded) {
      return;
    }
    const updateItems = [...selectedItems, product];
    setSelectedItems(updateItems);
    localStorage.setItem("selectedItems", JSON.stringify(updateItems));
  };

  // Selected products clear karo
  const updateProduct = JSON.parse(localStorage.getItem("selectedItems"))||[]
  const clearProducts = (id) => {
    const deleteItems = updateProduct.filter((item)=> item.id!= id)
    localStorage.setItem("selectedItems", JSON.stringify(deleteItems))
    window.location.reload();
  };


  return (
    <div className="flex flex-col px-4 py-4">
      {/* Navbar */}
      <div className="no-print flex items-center justify-center">
        <h1 className="px-5 text-3xl font-semibold cursor-pointer">FAHAD</h1>

        <span className="flex items-center border border-black/30 rounded-sm lg:w-[700px] px-2">
          <input
            type="search"
            placeholder="Get Items Easy"
            className="w-full px-2 py-2 text-xl text-black/70 bg-transparent outline-none"
          />
          <IoSearchOutline className="text-3xl" />
        </span>

        <ul className="flex items-center gap-6 px-2">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/add-items")}>
            Add items
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/bin")}>
            Bin
          </li>
          <li className="cursor-pointer">History</li>
          <li
            className="cursor-pointer"
            onClick={() => navigate("/profile-page")}
          >
            DashBoard
          </li>
        </ul>
      </div>

      <div className="w-full flex flex-col gap-2 py-4">
        <h4 className="text-center text-3xl">Your Items</h4>

        <div className="h-[80vh] border border-black/40 flex flex-col">
          {/* Selected products: PRINT AREA */}
          <div
            id="print-area"
            className="h-[50vh] overflow-y-auto border-y border-black px-2 py-2"
          >
            {selectedItems.length === 0 ? (
              <p className="no-print text-center text-gray-500 mt-5">
                Click a product below to add it here
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {selectedItems.map((item) => (
                  <AddedItemsBox
                    key={item.id}
                    id={item.id}
                    productName={item.productname}
                    ProductBrand={item.brand}
                    specification={item.specification}
                    gst={item.gst}
                    price={item.sellingPrice}
                    onClick={()=>clearProducts(item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Inventory table */}
          <div className="h-[30vh] overflow-y-auto px-2 py-2 no-print">
            <table className="w-full text-center border-b border-black/50">
              <thead>
                <tr>
                  <th className="py-2">Product Id</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Brand</th>
                  <th className="py-2">Specification</th>
                  <th className="py-2">In Stock</th>
                  <th className="py-2 text-end">Price</th>
                </tr>
              </thead>
            </table>

            <div className="flex flex-col gap-2">
              {productDetails.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addProduct(item)}
                  className="cursor-pointer hover:bg-black/5 transition-colors"
                  title="Click to add product"
                >
                  <ItemBoxAdded
                    id={item.id}
                    productName={item.productname}
                    brand={item.brand}
                    specification={item.specification}
                    stoke={item.itemStoke}
                    price={item.sellingPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="no-print w-full flex items-center justify-end gap-4">
          <Button text="Checkout" onClick={()=>navigate("/checkOut-page")} />
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
