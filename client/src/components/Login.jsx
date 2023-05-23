import React from "react";
import logo1 from "./../assets/images/bglogin.png";
import logo3 from "./../assets/images/facebook.png";
import logo4 from "./../assets/images/google.png";
import logo5 from "./../assets/images/login.png";
import logo6 from "./../assets/images/button.png";
import { useState } from "react";
import { loginReq } from "./ProfileFetch";

function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white h-[700px] w-[500px] pt-11 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-32 mt-5 mb-3 text-5xl">L&nbsp;O&nbsp;&nbsp;G&nbsp;&nbsp;I&nbsp;&nbsp;N</h3>
          <h3 className="font-extralight text-[#b8c1ca] italic ml-[180px] mb-10 fontFamily:Roboto text-md">New User?&nbsp;<span className="underline hover:text-pink-700"><a href="/SignUp">SignUp</a></span></h3>
          <div className="cursor-pointer hover:animate-bounce rounded-3xl border h-12 w-80 ml-[90px] flex p-4 border-[#2e3031] justify-center">
            <img className ="h-fit w-fit mt-[-8px]" src={logo3} alt="" />
            <h3 className="font-extralight text-[#2e3031] mt-[-4px] ml-3 fontFamily:Roboto text-md">Continue with Facebook</h3>
          </div>
          <div className="cursor-pointer border flex p-4 hover:animate-bounce h-12 w-80 ml-[90px] mb-10 mt-2 rounded-3xl border-[#2e3031] justify-center">
            <img className ="h-fit w-fit mt-[-6px]" src={logo4} alt="" />
            <h3 className="font-extralight text-[#2e3031] mt-[-4px] ml-3 fontFamily:Roboto text-md">Continue with Google</h3>
          </div>
          <img className="w-80 ml-[90px] mb-10" src={logo5} alt="" />
          <form action="#">  
            <div className="">
              <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Your Email</p>
              <input className={`border pl-2 h-9 ml-[90px] rounded-xl w-80 fontFamily: Roboto ${
              !data.error ? "" : "border-red-500"} px-4 py-2 focus:outline-none border`} 
            type="email" name="name" id="name" 
                onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
            }}
              />
              {!data.error ? "" : alert(data.error)}
              <p className="font-extralight mt-6 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Password</p>
              <input className={`border pl-2 h-9 ml-[90px] rounded-xl w-80 ${
              !data.error ? "" : "border-red-500"
            } px-4 py-2 focus:outline-none border`}
              onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
            }}
            value={data.password}
            type="password"
            id="password"
            />
            {!data.error ? "" : alert(data.error)}
            </div>
            <button onClick={(e) => formSubmit()} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-10 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">L&nbsp;O&nbsp;G&nbsp;I&nbsp;N</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
