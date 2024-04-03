import React from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const Step2 = () => {
  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8">
        <h1 className="text-marineBlue text-3xl font-bold tracking-wide">
          Select your plan
        </h1>
        <p className="text-base text-coolGray my-4">
          You have the option of monthly or yearly billing
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* start box */}
          <div className="border-2 border-lightGray hover:border-purplishBlue md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col">
            <img src={arcade} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-base">Arcade</p>
              <p className="text-sm text-coolGray">$9/mo</p>
            </div>
          </div>
          {/* end box */}
          {/* start box */}
          <div className="border-2 border-lightGray hover:border-purplishBlue  md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col">
            <img src={advanced} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-base">Advanced</p>
              <p className="text-sm text-coolGray">$12/mo</p>
            </div>
          </div>
          {/* end box */}
          {/* start box */}
          <div className="border-2 border-lightGray hover:border-purplishBlue  md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col">
            <img src={pro} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-base">Pro</p>
              <p className="text-sm text-coolGray">$15/mo</p>
            </div>
          </div>
          {/* end box */}
        </div>
        {/* start switch box */}
        <div className="bg-magnolia w-full mt-8">
          <div className="flex items-center p-4 justify-center">
            <div className=" inline-block px-4">
              <p className="font-bold text-marineBlue text-base">Monthly</p>
            </div>
            <div className="inline-block px-4">
              <form action="">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </form>
            </div>
            <div className=" inline-block px-4">
              <p className="font-bold text-coolGray text-base">Yearly</p>
            </div>
          </div>
        </div>
        {/* end switch box */}
        {/* start buttons */}
        <div className="flex justify-between mt-8">
          <button className="bg-white text-marineBlue py-4 px-8 rounded-lg font-bold">
            Go Back
          </button>
          <button className="bg-marineBlue text-white py-4 px-8 rounded-lg font-bold">
            Next Step
          </button>
        </div>
        {/* end buttons */}
      </div>
    </div>
  );
};

export default Step2;
