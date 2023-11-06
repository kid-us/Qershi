import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../../app.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNo: "",
    },
  });

  const onSubmit = (data) => {
    console.log("251" + data.phoneNo);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-11 shadow-lg rounded py-3 form-bg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="fw-semibold fs-4 mb-5">Sign In</p>
              <label htmlFor="phone" className="small label">
                Enter your phone number here
              </label>

              <div className="input-group mb-3 fw-semibold mt-3">
                <span className="input-group-text p-2 text- fs-6 fw-semibold">
                  +251
                </span>

                <input
                  type="tel"
                  className={`form-control fs-5 ${
                    errors.phoneNo && "border border-danger border-3"
                  }`}
                  {...register("phoneNo", {
                    required: true,
                    minLength: 9,
                    maxLength: 9,
                  })}
                />
              </div>

              <Button name={"Sign In"}></Button>

              <p className="mt-4 small text-end fw-semibold">
                Don't have an account?
                <Link
                  className="text-decoration-none ms-2 fw-semibold"
                  to={"/register"}
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
