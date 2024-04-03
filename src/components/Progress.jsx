import React from "react";
import sidebarDesktop from "../assets/bg-sidebar-desktop.svg";
import sidebarMobile from "../assets/bg-sidebar-mobile.svg";

const Progress = () => {
  return (
    <>
      <div
        className="hidden md:block w-1/3 bg-no-repeat p-8 flex flex-col"
        style={{ backgroundImage: `url(${sidebarDesktop})` }}
      >
        {/* start step */}

        <div className="flex gap-4 py-4">
          <div className="rounded-full bg-lightBlue border-2 border-marineBlue text-marineBlue font-bold w-10 h-10 flex items-center justify-center">
            <span>1</span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="uppercase text-lightGray text-xs">Step 1</h2>
            <p className="uppercase text-white text-xs font-bold tracking-wider">
              Your info
            </p>
          </div>
        </div>
        {/* end step */}
        {/* start step */}

        <div className="flex gap-4 py-4">
          <div className="rounded-full border-2 border-white text-white font-bold w-10 h-10 flex items-center justify-center">
            <span>2</span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="uppercase text-lightGray text-xs">Step 2</h2>
            <p className="uppercase text-white text-xs font-bold tracking-wider">
              Select plan
            </p>
          </div>
        </div>
        {/* end step */}
        {/* start step */}

        <div className="flex gap-4 py-4">
          <div className="rounded-full border-2 border-white text-white font-bold w-10 h-10 flex items-center justify-center">
            <span>3</span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="uppercase text-lightGray text-xs">Step 3</h2>
            <p className="uppercase text-white text-xs font-bold tracking-wider">
              Add-ons
            </p>
          </div>
        </div>
        {/* end step */}
        {/* start step */}

        <div className="flex gap-4 py-4">
          <div className="rounded-full border-2 border-white text-white font-bold w-10 h-10 flex items-center justify-center">
            <span>4</span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="uppercase text-lightGray text-xs">Step 4</h2>
            <p className="uppercase text-white text-xs font-bold tracking-wider">
              Summary
            </p>
          </div>
        </div>
        {/* end step */}
      </div>
      <div className="md:hidden w-full h-44">
        <div
          className=" w-full h-full bg-cover"
          style={{ backgroundImage: `url(${sidebarMobile})` }}
        ></div>
      </div>
    </>
  );
};

export default Progress;