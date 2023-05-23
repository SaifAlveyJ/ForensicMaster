import React from "react";
import image from "../assets/images/bgpayment.png";
import image1 from "../assets/images/SiteLogo.png";
import image2 from "../assets/images/plans.png";
import image3 from "../assets/images/payment.png";
import image4 from "../assets/images/mastercard.png";
import image5 from "../assets/images/visa.png";
import image6 from "../assets/images/paypal.png";
import logo from "./../assets/images/button.png";

function Payment() {
  return (
    <div className="flex">
      <div className="" style={{ background: `url(${image})`, backgroundPosition: 'center' }}>
        <div className="flex w-screen lg:w-[900px]">
          <img className="p-3 display: invisible md:visible" src={image1} alt="logo" />
        </div>
        <div className="lg:mt-10 lg:ml-10 display: invisible lg:visible">
          <h3 className="font-bold fontFamily:Roboto ml-10 mb-5 text-white text-5xl">Your Package Details</h3>
          <h3 className="fontFamily:Roboto ml-10 text-white mb-10 text-2xl">Fill in the Payment Details</h3>
          <a href="/Plans"><div className="border w-[180px] rounded-md border-white float-right mr-28 cursor-pointer hover:animate-bounce">
            <img className="pt-7 pb-3 ml-[75px]" src={image2} alt="logo" />
            <h3 className="fontFamily:Roboto ml-9 mb-7 text-white text-md">View Packages</h3>
          </div></a>
          <div className="flex mt-40">
            <img className="p-3 ml-10" src={image3} alt="logo" />
            <h3 className="font-semibold fontFamily:Roboto ml-10 mr-20 mt-24 md:ml-28 text-white text-md">Go Lite</h3>
            <h3 className="fontFamily:Roboto md:ml-28 text-white mt-24 text-md">$7 / month</h3>
            <hr className="text-white border w-[700px] mt-40 justify-center ml-[-670px] border-white"/>
          </div>
          <div className="mt-14 mb-20">
            <h3 className="font-semibold fontFamily:Roboto ml-10 md:ml-28 text-white text-xl mb-5">Order Summary</h3>
            <div className="flex">
              <h3 className="font-semibold fontFamily:Roboto ml-10 mr-96 md:ml-28 text-white text-md">Sub Total</h3>
              <h3 className="fontFamily:Roboto md:ml-28 text-white text-md">$7</h3>
              <hr className="text-white border w-[600px] mt-7 justify-center ml-[-590px] border-white"/>
            </div>
            <div className="flex mt-3">
              <h3 className="font-semibold fontFamily:Roboto ml-10 mr-[387px] md:ml-28 text-white text-md">Discount</h3>
              <h3 className="fontFamily:Roboto md:ml-28 text-white text-md">$0</h3>
              <hr className="text-white border w-[600px] mt-7 justify-center ml-[-587px] border-white"/>
            </div>
            <div className="flex mt-3">
              <h3 className="font-semibold fontFamily:Roboto ml-10 mr-[415px] md:ml-28 text-white text-md">Total</h3>
              <h3 className="fontFamily:Roboto md:ml-28 text-white font-semibold text-md">$7</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[-530px] md:ml-[-650px] lg:ml-0 bg-white my-20 lg:my-0 rounded-2xl lg:rounded-none">
        <div>
          <h3 className="font-bold fontFamily:Roboto mt-32 ml-14 mb-7 text-4xl">Payment Details</h3>
          <div className="flex ml-12 mb-10 mr-14 lg:mr-0 justify-around">
            <img className="w-12 h-8" src={image4} alt="logo" />
            <img className="w-12 h-6 mt-1" src={image5} alt="logo" />
            <img className="w-16 h-8" src={image6} alt="logo" />
          </div>
        </div>
        <form action="#" className="mr-14 lg:mr-0">
          <p className="font-extralight ml-[60px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Cardholder Name</p>
          <input className="border pl-2 h-9 ml-[60px] mb-5 fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="text" name="name" id="name"/>
          <p className="font-extralight ml-[60px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Card Number</p>
          <input className="border pl-2 h-9 ml-[60px] mb-5 fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="number" name="number" id="number"/>
          <div className="flex">
            <p className="font-extralight ml-[60px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Expiry Date</p>
            <p className="font-extralight ml-[110px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">CVC</p>
          </div>
          <div className="flex">
            <input className="border pl-2 h-9 ml-[60px] w-40 fontFamily: Roboto rounded-xl fontFamily: Roboto" type="date" name="expiry" id="expiry"/>
            <input className="border pl-2 h-9 ml-[20px] fontFamily: Roboto rounded-xl w-36 fontFamily: Roboto" type="number" name="cvc" id="cvc"/>
          </div>
          <a href="/Plans"><button className="h-10 text-extralight ml-[65px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-14 hover:animate-bounce" style={{background: `url(${logo})`}} type="submit">PURCHASE</button></a>
        </form>
      </div>
    </div>
  )
}

export default Payment;
