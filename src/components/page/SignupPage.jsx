import React, { useState } from "react";
import Button from "../components/button/Button";

const SignupPage = () => {

  const[signup, setSignup] = useState({
    name: "",
    email: "",
    password:"",
    number: "",
    bussinessname:"",
    address: "",
    webUrl:""
  })

  const handleChange=(e)=>{
    const{name, value}= e.target;
    setSignup({...signup, [name]:value});
  }
  const handleSubmit = () => {
    e.preventDefault();
    const existData = JSON.parse(localStorage.getItem("SignupData")) ||[];
    const update = [...existData, signup]

    localStorage.setItem("signupData", JSON.stringify(update));
    
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-green-500/30">
      <div className="w-[1000px] flex flex-col gap-4 border border-black/50 p-4">
        <h1 className="text-5xl font-semibold text-center">Register Here !</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-1 w-full"
        >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="name"
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <div className="flex w-full gap-2 items-center">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="example@.com"
                className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Set password</label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
              />
            </div>
          </div>
          <label htmlFor="number">Mobile Number</label>
          <input
            type="number"
            placeholder="98XXX-XXX-XXX"
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="bussinessName">Bussiness name</label>
          <input
            type="text"
            placeholder="electronics, book store, counter sales"
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="lane 24, example road"
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="website">Website Url (Optional)</label>
          <input
            type="url"
            placeholder="example.com"
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />

          <button className="w-full border border-black/50 px-2 py-1 bg-green-500/60 hover:bg-green-500/80 my-4">
            Signup{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
