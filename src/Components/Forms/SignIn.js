import React from "react";
import bgImg from "../../Images/imageOne.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
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
              {...register("username")}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password")}
              placeholder="password"
            />
            <input
              type="text"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            <input
              type="text"
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
            <button className="btn"  onClick={()=>{navigate("/login")}}>Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
