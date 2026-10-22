import React, { useState } from "react";
import Button from "../components/button/Button";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate= useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    bussinessname: "",
    address: "",
    webUrl: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if(!signup.email|| !signup.password){
    alert("fiels is required")
    return
  }
    const existData = JSON.parse(localStorage.getItem("SignupData")) || [];
    const email = signup.email.trim().toLowerCase();
    const existEmail = existData.some((user)=> user.email.toLowerCase()==email)
    if(existEmail){
      alert("User Already Exists!")
    }
    const newUser = {
      ...signup, 
      email
    }

    localStorage.setItem("SignupData", JSON.stringify([...existData, newUser]));
    alert("signup sucessfull")
  };
  const [show, setshow] = useState(false);

  const togglepass =()=>{
    setshow((prev)=> !prev)
  }
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
            name="name"
            placeholder="name"
            value={signup.name}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <div className="flex w-full gap-2 items-center">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@.com"
                value={signup.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Set password</label>
              <span className="border border-black/50 w-full flex items-center">
                <input
                  type={!show ? "password" : "text"}
                  name="password"
                  value={signup.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="w-full px-2 py-1 bg-transparent outline-none placeholder-black/50"
                />{" "}
                <div onClick={togglepass}>
                  {!show ? (
                  <BsEye size={22} />
                ) : (
                  <BsEyeSlash size={22}/>
                )}
                </div>
              </span>
            </div>
          </div>
          <label htmlFor="number">Mobile Number</label>
          <input
            type="tel"
            name="number"
            placeholder="98XXX-XXX-XXX"
            value={signup.number}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="bussinessName">Bussiness name</label>
          <input
            type="text"
            name="bussinessname"
            placeholder="electronics, book store, counter sales"
            value={signup.bussinessname}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="lane 24, example road"
            value={signup.address}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />
          <label htmlFor="website">Website Url (Optional)</label>
          <input
            type="url"
            name="webUrl"
            placeholder="example.com"
            value={signup.webUrl}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
          />

          <button className="w-full border border-black/50 px-2 py-1 bg-green-500/60 hover:bg-green-500/80 my-4">
            Signup{" "}
          </button>
        </form>
        <div className="flex items-center justify-center">
          <span className="text-sm flex items-center">Already have an Account? <p
          className="text-blue-400 hover:text-red-600 cursor-pointer" onClick={()=>navigate("/login-page")}> Login</p></span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
