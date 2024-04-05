import React, { useEffect } from "react";
import { useRegFormContext } from "../contexts/RegFormContext";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const [state, dispatch] = useRegFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CHANGE_PROGRESS", data: 3 });
    if (!state.addons) {
      dispatch({
        type: "PICK_ADD-ONS",
        data: {
          onlineService: false,
          localStorage: false,
          customizableProfile: false,
        },
      });
    }
  }, [dispatch]);

  const onSubmit = () => {
    navigate("/finishing");
  };
  const handleToggleAddons = (addon) => {
    dispatch({
      type: "PICK_ADD-ONS",
      data: {
        ...state.addons,
        [addon]: !state.addons[addon],
      },
    });
  };
  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8">
        <h1 className="text-marineBlue text-3xl font-bold tracking-wide">
          Pick add-ons
        </h1>
        <p className="text-base text-coolGray my-4">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="flex flex-col gap-6">
          {/* start add-on */}
          <div className="border-2 border-purplishBlue flex flex-row items-center p-4 rounded-lg">
            <div className="w-1/5">
              <input
                onChange={() => handleToggleAddons("onlineService")}
                defaultChecked={state?.addons?.onlineService}
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 accent-purplishBlue"
              />
            </div>
            <div className="w-3/5">
              <p className="font-bold text-marineBlue text-base">
                Online service
              </p>
              <p className="text-sm text-coolGray">
                Access to multiplayer games
              </p>
            </div>
            <div className="w-1/5">
              <p className="font-bold text-purplishBlue text-base">+$1/mo</p>
            </div>
          </div>
          {/* end buttons */}
          {/* start add-on */}
          <div className="border-2 border-purplishBlue flex flex-row items-center p-4 rounded-lg">
            <div className="w-1/5">
              <input
                onChange={() => handleToggleAddons("localStorage")}
                defaultChecked={state?.addons?.localStorage}
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 accent-purplishBlue"
              />
            </div>
            <div className="w-3/5">
              <p className="font-bold text-marineBlue text-base">
                Larger storage
              </p>
              <p className="text-sm text-coolGray">Extra 1TB of cloud save</p>
            </div>
            <div className="w-1/5">
              <p className="font-bold text-purplishBlue text-base">+$2/mo</p>
            </div>
          </div>
          {/* end buttons */}
          {/* start add-on */}
          <div className="border-2 border-purplishBlue flex flex-row items-center p-4 rounded-lg">
            <div className="w-1/5">
              <input
                onChange={() => handleToggleAddons("customizableProfile")}
                defaultChecked={state?.addons?.customizableProfile}
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 accent-purplishBlue"
              />
            </div>
            <div className="w-3/5">
              <p className="font-bold text-marineBlue text-base">
                Customizable Profile
              </p>
              <p className="text-sm text-coolGray">
                Custom theme on your profile
              </p>
            </div>
            <div className="w-1/5">
              <p className="font-bold text-purplishBlue text-base">+$2/mo</p>
            </div>
          </div>
          {/* end buttons */}
        </div>

        {/* start buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/plan")}
            className="bg-white text-marineBlue py-4 px-8 rounded-lg font-bold"
          >
            Go Back
          </button>
          <button
            onClick={onSubmit}
            className="bg-marineBlue text-white py-4 px-8 rounded-lg font-bold"
          >
            Next Step
          </button>
        </div>
        {/* end buttons */}
      </div>
    </div>
  );
};

export default Step3;
