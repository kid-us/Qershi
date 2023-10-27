import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import VerifyInputs from "../Form/VerifyInputs";
import Button from "../Form/Button";
import "../../app.css";

const Verify = () => {
  const [errors, setErrors] = useState({});
  const [verify, setVerify] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const [counter, setCounter] = useState(30);

  //   Counter
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => setCounter(counter - 1), 1000)
        : setCounter("Resend");
    return () => clearInterval(timer);
  }, [counter]);

  //   VAlidation Schema
  const schema = {
    otp1: Joi.number().required(),
    otp2: Joi.number().required(),
    otp3: Joi.number().required(),
    otp4: Joi.number().required(),
  };

  // Form Validation
  const validate = () => {
    const { error } = Joi.validate(verify, schema, { abortEarly: false });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    doSubmit();
  };

  // All good to go
  const doSubmit = () => {
    console.log("Submit");
  };

  // On Input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    let userData = { ...verify };
    userData[name] = value;
    setVerify(userData);
    setErrors(errors);
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

            <form onSubmit={handleSubmit} className="pb-3">
              <p className="small mb-4 label">
                Enter the 4 digit we send on mobile number :{" "}
                <span className="text-info fw-semibold"> +251990000000</span>
              </p>

              {/* Input Group */}
              <div className="input-group">
                <VerifyInputs
                  name="otp1"
                  value={verify.otp1}
                  onChange={handleChange}
                  error={errors.otp1}
                ></VerifyInputs>

                <VerifyInputs
                  name="otp2"
                  value={verify.otp2}
                  onChange={handleChange}
                  error={errors.otp2}
                ></VerifyInputs>

                <VerifyInputs
                  name="otp3"
                  value={verify.otp3}
                  onChange={handleChange}
                  error={errors.otp3}
                ></VerifyInputs>

                <VerifyInputs
                  name="otp4"
                  value={verify.otp4}
                  onChange={handleChange}
                  error={errors.otp4}
                ></VerifyInputs>
              </div>

              {/* REsend Counter */}

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
