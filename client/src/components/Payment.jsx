import React from "react";
import image from "../assets/images/bgpayment.png";
import image1 from "../assets/images/SiteLogo.png";
import image2 from "../assets/images/plans.png";
import image3 from "../assets/images/payment.png";

function Payment() {
  return (
    <div className="flex">
      <div className="" style={{ background: `url(${image})`, backgroundPosition: 'center' }}>
        <div className="flex w-[950px]">
          <img className="p-3" src={image1} alt="logo" />
        </div>
        <div className="mt-10 ml-20">
          <h3 className="font-bold fontFamily:Roboto md:ml-28 mb-5 text-white text-5xl">Your Package Details</h3>
          <h3 className="fontFamily:Roboto md:ml-28 text-white mb-10 text-2xl">Fill in the Payment Details</h3>
          <a href="/Plans"><div className="border w-[180px] rounded-md border-white float-right mr-32 cursor-pointer hover:animate-bounce">
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
      <div>
        <form action="#">
          <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Cardholder Name</p>
          <input className="border pl-2 h-9 ml-[90px] fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="text" name="name" id="name"/>
          <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Card Number</p>
          <input className="border pl-2 h-9 ml-[90px] fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="number" name="number" id="number"/>
          <div className="flex">
            <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Expiry Date</p>
            <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">CVC</p>
          </div>
          <div className="flex">
            <input className="border pl-2 h-9 ml-[90px] fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="date" name="expiry" id="expiry"/>
            <input className="border pl-2 h-9 ml-[90px] fontFamily: Roboto rounded-xl w-80 fontFamily: Roboto" type="number" name="cvc" id="cvc"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Payment;
