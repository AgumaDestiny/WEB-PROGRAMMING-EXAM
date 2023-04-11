import React, { useState } from "react";
import bgImg from "../../Images/background.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

export default function SignIn() {
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members")) || []
  );
  const [formData] = useState({});

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch
  } = useForm();

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = () => {
    console.log(formData);
    const { confirmpwd, ...userInfo } = formData;
    setMembers((prevData) => [...prevData, userInfo]);
    console.log(members);

    localStorage.setItem("members", JSON.stringify(members));
    navigate("/login"); 
  };

  return (
    <section className="forms">
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Please Sign-In Here!</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true})}
              placeholder="username"
            />
            {errors.username && errors.username.type === "required" && (
              <p>This field is required</p>
            )}
            <input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="password"
            />
            {errors.password && errors.password.type === "required" && (
              <p>This field is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>Password must be at least 8 characters</p>
            )}

            <input
              placeholder="confirm password"
              type="password"
              {...register("confirmpwd", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.confirmpwd &&
              errors.confirmpwd.type === "required" && (
                <p>This field is required</p>
              )}
            {errors.confirmpwd &&
              errors.confirmpwd.type === "validate" && (
                <p>{errors.confirmpwd.message}</p>
              )}
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="email"
            />
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Invalid email address"}
            <input
              type="tel"
              {...register("mobile", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "minLength" && "Mobile Number Invalid"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button
              className="btn"
              onClick={() => {
                const formData = getValues();
                const { confirmpwd, ...userInfo } = formData;
                setMembers((prevData) => [...prevData, userInfo]);
              }}
            >
              Sign In
            </button>
          </form>

          <button className="link-btn" onClick={() => navigate("/login")}>
            Already have an account? Log In here
          </button>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
