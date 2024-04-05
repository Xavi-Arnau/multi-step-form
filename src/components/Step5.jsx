import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Step5 = () => {
  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8 flex flex-col justify-center items-center">
        <div>
          <FaCheckCircle size={60} className="text-red-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center p-8">Thank you!</h1>
          <p className="text-center text-coolGray px-32 text-lg">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
