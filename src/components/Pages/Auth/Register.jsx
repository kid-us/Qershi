import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import "../../../app.css";

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().min(4).label("Username"),
    password: Joi.string().required().min(6).label("Password"),
  };

  // Form Validation
  const validate = () => {
    const { error } = Joi.validate(register, schema, { abortEarly: false });

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
    let userData = { ...register };
    userData[name] = value;
    setRegister(userData);
    setErrors(errors);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-5 col-md-6 col-12 shadow-lg rounded py-3 form-bg">
            <form onSubmit={handleSubmit} className="pb-3">
              <p className="fw-semibold fs-4 mb-4">Sign Up</p>

              <label htmlFor="phone" className="small label">
                Username
              </label>

              <Input
                name="username"
                type="text"
                icon={"bi-person-circle"}
                value={register.username}
                onChange={handleChange}
                error={errors.username}
              ></Input>

              <div className="small">
                {errors.username && (
                  <p className="text-danger small p-0 mt-2">
                    {errors.username}
                  </p>
                )}
              </div>

              <label htmlFor="phone" className="small label">
                Password
              </label>
              <Input
                title="Sign Up"
                name="password"
                type="password"
                icon={"bi-lock-fill"}
                value={register.password}
                onChange={handleChange}
                error={errors.password}
              ></Input>

              <div className="small">
                {errors.password && (
                  <p className="text-danger small p-0 mt-2">
                    {errors.password}
                  </p>
                )}
              </div>

              <Button name={"Sign Up"}></Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
