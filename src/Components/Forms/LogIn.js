import React from 'react'
import bgImg from '../../Images/imageOne.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();

    const { register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>

        <div className="register">
            <div className="col-1">
                <h2>Log In</h2>
                <span>Please Log-In Here!</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <button className='btn' onClick={()=>{navigate("/")}}>Log In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}