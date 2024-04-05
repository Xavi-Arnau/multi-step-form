import React, { useEffect } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import { useRegFormContext } from "../contexts/RegFormContext";
import { useNavigate } from "react-router-dom";
import { plans } from "../data";

const Step2 = () => {
  const [state, dispatch] = useRegFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CHANGE_PROGRESS", data: 2 });
    if (!state.plan) {
      dispatch({
        type: "PLAN_SELECT",
        data: { plan: "arcade", yearly: false },
      });
    }
  }, [dispatch]);

  const handlePlanChange = (plan) => {
    dispatch({ type: "PLAN_SELECT", data: { ...state.plan, plan: plan } });
  };

  const handlePeriodChange = () => {
    dispatch({
      type: "PLAN_SELECT",
      data: { ...state.plan, yearly: !state.plan.yearly },
    });
  };

  const onSubmit = () => {
    navigate("/addons");
  };

  const renderPlanSelected = (current) => {
    return state?.plan?.plan === current
      ? "border-purplishBlue"
      : "border-lightGray";
  };

  const renderPrice = (name) => {
    const plan = plans.find((item) => item.name === name);
    if (state?.plan?.yearly) {
      return (
        <>
          <p className="text-base text-coolGray">${plan.yearly}/yr</p>
          <p className="text-sm text marineBlue">2 months free</p>
        </>
      );
    } else {
      return <p className="text-base text-coolGray">${plan.monthly}/mo</p>;
    }
  };

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
          <div
            onClick={() => handlePlanChange("arcade")}
            className={`border-2 ${renderPlanSelected(
              "arcade"
            )} hover:border-purplishBlue md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col`}
          >
            <img src={arcade} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-xl">Arcade</p>
              {renderPrice("arcade")}
            </div>
          </div>
          {/* end box */}
          {/* start box */}
          <div
            onClick={() => handlePlanChange("advanced")}
            className={`border-2 ${renderPlanSelected(
              "advanced"
            )} hover:border-purplishBlue md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col`}
          >
            <img src={advanced} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-xl">Advanced</p>
              {renderPrice("advanced")}
            </div>
          </div>
          {/* end box */}
          {/* start box */}
          <div
            onClick={() => handlePlanChange("pro")}
            className={`border-2 ${renderPlanSelected(
              "pro"
            )} hover:border-purplishBlue md:w-1/3 p-4 rounded-lg flex flex-row md:flex-col`}
          >
            <img src={pro} alt="" className="md:mb-14 w-12" />
            <div className="py-2 px-8 md:p-0">
              <p className="font-bold text-marineBlue text-xl">Pro</p>
              {renderPrice("pro")}
            </div>
          </div>
          {/* end box */}
        </div>
        {/* start switch box */}
        <div className="bg-magnolia w-full mt-8">
          <div className="flex items-center p-4 justify-center">
            <div className=" inline-block px-4">
              <p
                className={`font-bold ${
                  !state?.plan?.yearly ? "text-marineBlue" : "text-coolGray"
                } text-base`}
              >
                Monthly
              </p>
            </div>
            <div className="inline-block px-4">
              <form action="">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={handlePeriodChange}
                    checked={state?.plan?.yearly || false}
                  />
                  <span className="slider round"></span>
                </label>
              </form>
            </div>
            <div className=" inline-block px-4">
              <p
                className={`font-bold ${
                  state?.plan?.yearly ? "text-marineBlue" : "text-coolGray"
                } text-base`}
              >
                Yearly
              </p>
            </div>
          </div>
        </div>
        {/* end switch box */}
        {/* start buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/")}
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

export default Step2;
