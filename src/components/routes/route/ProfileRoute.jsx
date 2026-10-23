import React from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ProfileRoute = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const loginValue = "0";
    localStorage.setItem("loginValue", loginValue);
    navigate("/login-page");
  };
  return (
    <div className="w-full flex flex-col gap-2 px-2 items-center h-[100vh]">
      <div className="w-full flex items-center justify-between px-6 h-16">
        <div className="flex">
          <span
            className="p-2 rounded-full bg-green-500 border border-black/30 cursor-pointer hover:p-3 hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/")}
          >
            <IoArrowBack />
          </span>
        </div>
        <Button text="Logout" onClick={handleLogout} />
      </div>
      {/* profile logic  */}
      <div className="w-full h-[90vh] border-y border-black/50 overflow-y-auto ">
        <h1 className="px-6 text-3xl font-semibold py-4 rounded-sm bg-green-500/80">
          Owner Details
        </h1>
        <div className="w-full px-6 py-4">
          <div className="w-full flex items-center gap-2">
            <div className="w-full">
              <label htmlFor="name" className="flex gap-1">
                First Name <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="First name"
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name" className="flex gap-1">
                Last Name <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="Last name"
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
              />
            </div>
          </div>
          <label htmlFor="name" className="flex gap-1">
            Email <p className="text-red-500">*</p>
          </label>
          <input
            type="email"
            placeholder="example@.com"
            required
            className="w-full px-2 py-2 bg-transparent outline-none border border-black/50  placeholder-black/50"
          />
          <div className="w-full flex items-center gap-2">
            <div className="w-full">
              <label htmlFor="number" className="flex gap-1">
                Mobile No. <p className="text-red-500">*</p>
              </label>
              <input
                type="tel"
                placeholder="Mobile no"
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="number" className="flex gap-1">
                Alternate Mobile No. <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="Alternate mobile no."
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50  placeholder-black/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full">
              <label htmlFor="pan" className="flex gap-1">
                PAN No. <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="PAN No."
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50  placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="aadhar" className="flex gap-1">
                Aadhar No <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="Aadhar No."
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
              />
            </div>
          </div>
          <label htmlFor="postion" className="flex gap-1">
            Position in company <p className="text-red-500">*</p>
          </label>
          <input
            type="text"
            placeholder="Your position"
            required
            className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
          />
          <div className="flex items-center gap-2">
            <div className="w-full">
              <label htmlFor="address" className="flex gap-1">
                Parmanent Address <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="parmanent Address"
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="currentAddress" className="flex gap-1">
                Current Address <p className="text-red-500">*</p>
              </label>
              <input
                type="text"
                placeholder="Current address"
                required
                className="w-full px-2 py-2 bg-transparent outline-none border border-black/50  placeholder-black/50"
              />
            </div>
          </div>
        </div>
        {/* company Details  */}
        <div className="w-full  py-4 flex flex-col gap-2">
          <h1 className="px-6 text-3xl font-semibold py-4 rounded-sm bg-green-500/80">
            Company Details
          </h1>
          <div className="w-full px-6">
            <label htmlFor="name" className="flex gap-1">
              Company Name <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="Company name"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <label htmlFor="email" className="flex gap-1">
              Company email <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="company email"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <div>
              <div>
                <label htmlFor="number" className="flex gap-1">
                  Company Phone <p className="text-red-500">*</p>
                </label>
                <input
                  type="tel"
                  placeholder="company Phone"
                  required
                  className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
                />
              </div>
              <div>
                <label htmlFor="number" className="flex gap-1">
                  Company Second Phone <p className="text-red-500">*</p>
                </label>
                <input
                  type="tel"
                  placeholder="company second Phone"
                  required
                  className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
                />
              </div>
            </div>
            <label htmlFor="gstNumber" className="flex gap-1">
              GST number <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="GST number"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <label htmlFor="liscence" className="flex gap-1">
              Liscence <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="Company liscence"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <label htmlFor="panNumber" className="flex gap-1">
              Company PAN <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="Company PAN"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <label htmlFor="url" className="flex gap-1">
              Company URL <p className="text-red-500">*</p>
            </label>
            <input
              type="url"
              placeholder="Company URL"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
            <label htmlFor="address" className="flex gap-1">
              Address <p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              placeholder="Company Address"
              required
              className="w-full px-2 py-2 bg-transparent outline-none border border-black/50 placeholder-black/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRoute;
