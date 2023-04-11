import React, { useState } from "react";
import bgImg from "../../Images/background.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

export default function LogIn() {
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
  } = useForm();

  const onSubmit = () => {
    console.log(formData);
    const { confirmpwd, ...userInfo } = formData;
    setMembers((prevData) => [...prevData, userInfo]);
    console.log(members);
    localStorage.setItem("members", JSON.stringify(members));

    localStorage.removeItem("loggedin-member");
    const form_values = getValues();
    localStorage.setItem("loggedin-member", JSON.stringify(form_values));

    navigate("/");
    form_values.role === "admin" ? navigate("/admin") : navigate("/members");
  };

  return (
    <section className="forms">
      <div className="register">
        <div className="col-1">
          <h2>Log In</h2>
          <span>Please Log-In Here!</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
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
              type="text"
              {...register("username")}
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
            <input
              type="text"
              {...register("role", { required: true })}
              placeholder="role"
            />
            {errors.role && errors.role.type === "required" && (
              <p>This field is required</p>
            )}
            <button
              className="btn"
              onClick={() => {
                const formData = getValues();
                const { confirmpwd, ...userInfo } = formData;
                setMembers((prevData) => [...prevData, userInfo]);
              }}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
