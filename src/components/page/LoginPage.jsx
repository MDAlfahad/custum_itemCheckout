import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLoggin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsLoggin({ ...isLogin, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const userLoginData = JSON.parse(localStorage.getItem("SignupData"));
    console.log(userLoginData);

    const user = userLoginData.find(
        (item)=> item.email === isLogin.email.trim() &&
        item.password ===isLogin.password
    )
    if(!user){
        alert("Email and Password is Invalid ! Try Again !")
        return
    }
    
    const LoginVlaue = "1"

    localStorage.setItem("loginValue",LoginVlaue)
    alert("Login successfull");

    navigate("/");
  };

  const [show, setshow] = useState(false);

  const togglepass = () => {
    setshow((prev) => !prev);
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-green-500/30">
      <div className="w-[1000px] flex flex-col gap-4 border border-black/50 p-4">
        <h1 className="text-5xl font-semibold text-center">Register Here !</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-1 w-full"
        >
          <div className="flex w-full gap-2 items-center">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@.com"
                onChange={handleChange}
                value={isLogin.email}
                className="w-full px-2 py-1 border border-black/50 bg-transparent outline-none placeholder-black/50"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <span className="border border-black/50 w-full flex items-center">
                <input
                  type={!show ? "password" : "text"}
                  name="password"
                  value={isLogin.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="w-full px-2 py-1 bg-transparent outline-none placeholder-black/50"
                />{" "}
                <div onClick={togglepass}>
                  {!show ? <BsEye size={22} /> : <BsEyeSlash size={22} />}
                </div>
              </span>
            </div>
          </div>

          <button className="w-full border border-black/50 px-2 py-1 bg-green-500/60 hover:bg-green-500/80 my-4">
            Signup{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
