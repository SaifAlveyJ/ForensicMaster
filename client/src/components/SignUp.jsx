import React, { useState } from "react";
import logo1 from "./../assets/images/bgsignup.png";
import logo6 from "./../assets/images/button.png";
import { signupReq } from "./ProfileFetch";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });

  const alert = (msg, type) => (
    <div className={`text-sm text-${type}-500`}>{msg}</div>
  );

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    try {
      let responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white h-[700px] w-[500px] pt-16 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-28 mt-5 mb-3 text-5xl">S&nbsp;&nbsp;I&nbsp;&nbsp;G&nbsp;&nbsp;N&nbsp;&nbsp;U&nbsp;&nbsp;P</h3>
          <h3 className="font-extralight text-[#b8c1ca] italic ml-[180px] mb-10 fontFamily:Roboto text-md">Already a User?&nbsp;<span className="underline hover:text-pink-700"><a href="/Login">Login</a></span></h3>
          <form action="#">  
          {data.success ? alert(data.success, "green") : ""}
            <div className="">
              <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Username</p>
              <input className={`border pl-2 h-9 ml-[90px] fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto ${data.error.name ? "ml-[90px] border-red-500" : ""} px-4 py-2 focus:outline-none border`}
              type="text" name="name" id="name"
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            />
            {!data.error ? "" : alert(data.error.name, "red")}
              <p className="font-extralight mt-6 ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Your Email</p>
              <input className={`border pl-2 h-9 ml-[90px] rounded-xl w-80 fontFamily: Roboto ${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            id="email"
            />
            {!data.error ? "" : alert(data.error.email, "red")}
              <p className="font-extralight mt-6 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Password</p>
              <input className={`border pl-2 h-9 ml-[90px] rounded-xl w-80 ${
              data.error.password ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
                onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            id="password"
              />
              {!data.error ? "" : alert(data.error.password, "red")}
              <p className="font-extralight mt-6 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Confirm Password</p>
              <input className={`border pl-2 h-9 ml-[90px] rounded-xl w-80 ${
              data.error.cPassword ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            type="password"
            id="cPassword"
              />
              {!data.error ? "" : alert(data.error.cPassword, "red")}
            </div>
            <button onClick={(e) => formSubmit()} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-10 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">S&nbsp;I&nbsp;G&nbsp;N&nbsp;U&nbsp;P</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
