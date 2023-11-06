import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import "../../app.css";

const Verify = () => {
  const [counter, setCounter] = useState(30);
  //   Counter
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => setCounter(counter - 1), 1000)
        : setCounter("Resend");
    return () => clearInterval(timer);
  }, [counter]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Resend Code
  const handleResend = () => {
    setCounter(60);
    console.log("Code Sended");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5  col-md-6 col-11 shadow-lg rounded py-3 form-bg">
            <p className="fw-semibold fs-4 mb-5">Verify Phone Number</p>

            <form onSubmit={handleSubmit(onSubmit)} className="pb-3">
              <p className="small mb-4 label">
                Enter the 4 digit we send on mobile number :{" "}
                <span className="text-info fw-semibold"> +251990000000</span>
              </p>

              {/* Input Group */}
              <div className="input-group bg-dark">
                <input
                  type="tel"
                  maxLength={1}
                  className={`form-control fw-semibold me-1 bg-white text-center fs-4 ${
                    errors.otp1 && "border border-danger border-2"
                  }`}
                  {...register("otp1", {
                    required: true,
                  })}
                />

                <input
                  type="tel"
                  maxLength={1}
                  className={`form-control fw-semibold me-1 bg-white text-center fs-4 ${
                    errors.otp2 && "border border-danger border-2"
                  }`}
                  {...register("otp2", {
                    required: true,
                  })}
                />

                <input
                  type="tel"
                  maxLength={1}
                  className={`form-control fw-semibold me-1 bg-white text-center fs-4 ${
                    errors.otp3 && "border border-danger border-2"
                  }`}
                  {...register("otp3", {
                    required: true,
                  })}
                />

                <input
                  type="tel"
                  maxLength={1}
                  className={`form-control fw-semibold me-1 bg-white fs-5 text-center fs-4 ${
                    errors.otp4 && "border border-danger border-2"
                  }`}
                  {...register("otp4", {
                    required: true,
                  })}
                />
              </div>

              {/* Resend Counter */}
              {typeof counter === "number" ? (
                <p className="mt-4 small fw-semibold">
                  Resend code in : <span className="text-info">{counter}</span>
                </p>
              ) : (
                <p
                  onClick={handleResend}
                  className="mt-4 small fw-semibold text-info cursor-pointer"
                >
                  {counter}
                </p>
              )}

              <Button name={"Verify"}></Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
