import React from "react";
import sidebarDesktop from "../assets/bg-sidebar-desktop.svg";
import sidebarMobile from "../assets/bg-sidebar-mobile.svg";
import { useRegFormContext } from "../contexts/RegFormContext";

const Progress = () => {
  const [state] = useRegFormContext();
  console.log(state);
  const renderProgress = (current) => {
    return state.progress === current
      ? "bg-lightBlue border-marineBlue text-marineBlue"
      : "border-white text-white";
  };
  return (
    <>
      <div id="progress" className="hidden md:block w-1/4">
        <div
          className="w-full h-full bg-cover bg-no-repeat p-8 flex flex-col rounded-xl"
          style={{ backgroundImage: `url(${sidebarDesktop})` }}
        >
          {/* start step */}

          <div className="flex gap-4 py-4">
            <div
              className={`${renderProgress(1)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center step`}
            >
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
            <div
              className={`${renderProgress(2)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center step`}
            >
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
            <div
              className={`${renderProgress(3)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center step`}
            >
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
            <div
              className={`${renderProgress(4)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center step`}
            >
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
      </div>
      <div className="md:hidden w-full h-44">
        <div
          className=" w-full h-full bg-cover"
          style={{ backgroundImage: `url(${sidebarMobile})` }}
        >
          <div className="flex flex-row gap-6 items-center justify-center p-8">
            <div
              className={`${renderProgress(1)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center`}
            >
              <span>1</span>
            </div>
            <div
              className={`${renderProgress(2)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center`}
            >
              <span>2</span>
            </div>
            <div
              className={`${renderProgress(3)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center`}
            >
              <span>3</span>
            </div>
            <div
              className={`${renderProgress(4)} rounded-full border-2 font-bold 
          w-10 h-10 flex items-center justify-center`}
            >
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
