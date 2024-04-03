import React from "react";

const Step1 = () => {
  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8">
        <h1 className="text-marineBlue text-3xl font-bold tracking-wide">
          Personal info
        </h1>
        <p className="text-base text-coolGray my-4">
          Please provide your name, email address, and phone number.
        </p>
        <form action="">
          <div className="my-8">
            <label htmlFor="name" className="block text-marineBlue font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
            />
          </div>
          <div className="my-8">
            <label htmlFor="name" className="block text-marineBlue font-bold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
            />
          </div>
          <div className="my-8">
            <label htmlFor="name" className="block text-marineBlue font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-marineBlue text-white py-4 px-8 rounded-lg font-bold">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
