import React, { useEffect } from "react";
import { useRegFormContext } from "../contexts/RegFormContext";
import { useNavigate } from "react-router-dom";
import { plans } from "../data";
import { addons } from "../data";

const Step4 = () => {
  const [state, dispatch] = useRegFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CHANGE_PROGRESS", data: 4 });
  }, [dispatch]);
  const onSubmit = () => {
    navigate("/thankyou");
  };
  const renderPlanPrice = () => {
    const plan = plans.find((item) => item.name === state.plan.plan);
    //console.log(plan);
    if (state?.plan?.yearly) {
      return <span>{`+$${plan.yearly}/yr`}</span>;
    } else {
      return <span>{`+$${plan.monthly}/mo`}</span>;
    }
  };
  const renderAddonPrice = (name) => {
    const addon = addons.find((item) => item.name === name);
    if (state?.plan?.yearly) {
      return <span>{`+$${addon.yearly}/yr`}</span>;
    } else {
      return <span>{`+$${addon.monthly}/mo`}</span>;
    }
  };
  const renderTotal = () => {
    const plan = plans.find((item) => item.name === state.plan.plan);
    let total = 0;
    total += state.plan.yearly ? plan.yearly : plan.monthly;
    if (state.addons.onlineService) {
      let addon = addons.find((item) => item.name === "onlineService");
      total += state.plan.yearly ? addon.yearly : addon.monthly;
    }
    if (state.addons.localStorage) {
      let addon = addons.find((item) => item.name === "localStorage");
      total += state.plan.yearly ? addon.yearly : addon.monthly;
    }
    if (state.addons.customizableProfile) {
      let addon = addons.find((item) => item.name === "customizableProfile");
      total += state.plan.yearly ? addon.yearly : addon.monthly;
    }

    if (state?.plan?.yearly) {
      return <span>{`+$${total}/yr`}</span>;
    } else {
      return <span>{`+$${total}/mo`}</span>;
    }
  };
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
                Arcade({state?.plan?.yearly ? "Yearly" : "Monthly"})
              </p>
              <p
                onClick={() => navigate("/plan")}
                className="text-sm text-coolGray cursor-pointer"
              >
                Change
              </p>
            </div>
            <div>
              <p className="font-bold text-marineBlue text-base">
                {renderPlanPrice()}
              </p>
            </div>
          </div>
          {/* end line */}
          {/* start line */}
          {state.addons.onlineService ? (
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-sm text-coolGray">Online service</p>
              </div>
              <div>
                <p className="font-bold text-marineBlue text-base">
                  {renderAddonPrice("onlineService")}
                </p>
              </div>
            </div>
          ) : null}

          {/* end line */}
          {/* start line */}
          {state.addons.localStorage ? (
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-sm text-coolGray">Local storage</p>
              </div>
              <div>
                <p className="font-bold text-marineBlue text-base">
                  {renderAddonPrice("localStorage")}
                </p>
              </div>
            </div>
          ) : null}
          {/* end line */}
          {/* start line */}
          {state.addons.customizableProfile ? (
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-sm text-coolGray">Customizable Profile</p>
              </div>
              <div>
                <p className="font-bold text-marineBlue text-base">
                  {renderAddonPrice("customizableProfile")}
                </p>
              </div>
            </div>
          ) : null}
          {/* end line */}
        </div>
        <div className="flex flex-row justify-between p-6">
          <div>
            <p className="text-base text-coolGray">
              Total (per {state.plan.yearly ? "year" : "month"})
            </p>
          </div>
          <div>
            <p className="font-bold text-marineBlue text-base">
              {renderTotal()}
            </p>
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
          <button
            onClick={onSubmit}
            className="bg-marineBlue text-white py-4 px-8 rounded-lg font-bold"
          >
            Confirm
          </button>
        </div>
        {/* end buttons */}
      </div>
    </div>
  );
};

export default Step4;
