import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../contexts/RegFormContext";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [state, dispatch] = useRegFormContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "PERSONAL_INFO", data: values });
      navigate("/plan");
    }
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_PROGRESS", data: 1 });
  }, [dispatch]);

  return (
    <div className="w-11/12 mx-auto md:w-2/3 rounded-xl md:rounded-none md:mt-0 -mt-20 bg-white h-screen md:h-auto">
      <div className="p-8">
        <h1 className="text-marineBlue text-3xl font-bold tracking-wide">
          Personal info
        </h1>
        <p className="text-base text-coolGray my-4">
          Please provide your name, email address, and phone number.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <label htmlFor="name" className="block text-marineBlue font-bold">
              Name
            </label>
            <input
              defaultValue={state?.personal?.name}
              type="text"
              name="name"
              id="name"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
              {...register("name", { required: "This field is required" })}
            />
            {errors.name && (
              <p className="text-red-600 font-bold text-right">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="my-8">
            <label htmlFor="email" className="block text-marineBlue font-bold">
              Email Address
            </label>
            <input
              defaultValue={state?.personal?.email}
              type="email"
              name="email"
              id="email"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 font-bold text-right">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="my-8">
            <label htmlFor="phone" className="block text-marineBlue font-bold">
              Phone Number
            </label>
            <input
              defaultValue={state?.personal?.phone}
              type="tel"
              name="phone"
              id="phone"
              className="border-2 border-lightGray rounded-lg w-full h-12 text-marineBlue font-bold px-4"
              {...register("phone", { required: "This field is required" })}
            />
            {errors.phone && (
              <p className="text-red-600 font-bold text-right">
                {errors.phone.message}
              </p>
            )}
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
