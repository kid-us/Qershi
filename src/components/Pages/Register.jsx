import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../Form/Input";
import { Link, redirect } from "react-router-dom";
import Button from "../Form/Button";
import "../../app.css";

const Register = () => {
  const [user, setUser] = useState({
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().label("Email").email({
      minDomainSegments: 2,
    }),
    phone: Joi.number().min(9).required().label("Phone"),
  };

  // Form Validation
  const validate = () => {
    const { error } = Joi.validate(user, schema, { abortEarly: false });

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
    let userData = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errors);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-11 shadow-lg rounded py-3 form-bg">
            <form onSubmit={handleSubmit}>
              <p className="fw-semibold fs-4 mb-5">Sign Up</p>

              <label htmlFor="phone" className="small label">
                Enter your phone number here
              </label>

              <Input
                name="phone"
                type="tel"
                value={user.phone}
                onChange={handleChange}
                error={errors.phone}
              ></Input>

              <Button name={"Sign Up"}></Button>

              <p className="mt-4 small text-end fw-semibold">
                Already have an account?
                <Link
                  className="text-decoration-none ms-2 fw-semibold"
                  to={"/login"}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
