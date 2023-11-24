import React, { useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import "../../../app.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-11 shadow-lg rounded py-3 form-bg">
            <form onSubmit={handleSubmit(onSubmit)} className="pb-3">
              <p className="fw-semibold fs-4 mb-4">Sign Up</p>

              <label htmlFor="phone" className="small label">
                Username
              </label>

              <input
                type="text"
                className={`form-control fs-5 bg-white mt-3 ${
                  errors.username && "border border-danger border-3"
                }`}
                {...register("username", {
                  required: "Username Required!",
                  minLength: 3,
                })}
              />
              <p className="small text-warning mt-1">
                {errors.username?.message}
              </p>

              <label htmlFor="phone" className="small label">
                Password
              </label>

              <input
                type="password"
                className={`form-control fs-5 bg-white mt-3 ${
                  errors.password && "border border-danger border-3"
                }`}
                {...register("password", {
                  required: "Password must be at least 8 chars! ",
                  minLength: 8,
                })}
              />
              <p className="small text-warning mt-1">
                {errors.password?.message}
              </p>

              <Button name={"Sign Up"}></Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
