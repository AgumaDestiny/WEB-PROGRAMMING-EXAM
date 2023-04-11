import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../Video/video-1.mp4";

function HeroSection() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const member = JSON.parse(localStorage.getItem("loggedin-member"));
    console.log("member", member)
    setUserInfo(member);
   
  }, []);
console.log(userInfo)
  if (!userInfo) {
    return null;
  }

  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>GOOGLE DEVELOPER STUDENTS CLUB</h1>
      <h2>Hello, {userInfo.username}!</h2>
      <h2>WANT TO LEARN GOOGLE TECHNOLOGIES!</h2>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          linkTo={"/signin"}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          linkTo={"/signin"}
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
