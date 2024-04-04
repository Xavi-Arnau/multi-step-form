import React, { useEffect } from "react";
import { useRegFormContext } from "../contexts/RegFormContext";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const [state, dispatch] = useRegFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CHANGE_PROGRESS", data: 4 });
  }, [dispatch]);
  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8">
        <h1 className="text-marineBlue text-3xl font-bold tracking-wide">
          Finishing up
        </h1>
        <p className="text-base text-coolGray my-4">
          Double-check everything looks Ok before confirming
        </p>

        <div className="rounded-lg bg-magnolia p-6 flex flex-col gap-8">
          {/* start line */}
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-bold text-marineBlue text-base">
                Arcade(Monthly)
              </p>
              <p className="text-sm text-coolGray">Change</p>
            </div>
            <div>
              <p className="font-bold text-marineBlue text-base">$9/mo</p>
            </div>
          </div>
          {/* end line */}
          {/* start line */}
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-sm text-coolGray">Online service</p>
            </div>
            <div>
              <p className="font-bold text-marineBlue text-base">+$1/mo</p>
            </div>
          </div>
          {/* end line */}
          {/* start line */}
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-sm text-coolGray">Online service</p>
            </div>
            <div>
              <p className="font-bold text-marineBlue text-base">+$1/mo</p>
            </div>
          </div>
          {/* end line */}
        </div>
        <div className="flex flex-row justify-between p-6">
          <div>
            <p className="text-base text-coolGray">Total (per month)</p>
          </div>
          <div>
            <p className="font-bold text-marineBlue text-base">+$12/mo</p>
          </div>
        </div>

        {/* start buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/addons")}
            className="bg-white text-marineBlue py-4 px-8 rounded-lg font-bold"
          >
            Go Back
          </button>
          <button className="bg-marineBlue text-white py-4 px-8 rounded-lg font-bold">
            Confirm
          </button>
        </div>
        {/* end buttons */}
      </div>
    </div>
  );
};

export default Step4;
