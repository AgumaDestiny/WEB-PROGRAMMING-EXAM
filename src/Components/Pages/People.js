import React, { useEffect, useState} from "react";
import "../../App.css";
import Navbar from "../Navbar";
import "./People.js";

export default function People() {
  // Retrieve user information from local storage  
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
    <div className="members">
      <Navbar />
      <h2>Welcome {userInfo.username}!</h2>
      <h3> Your Profile:</h3>
      <ul>
        <li>
          <strong>Name:</strong> <span id="username">{userInfo.username}</span>
        </li>
        <li>
          <strong>Email:</strong> <span id="email">{userInfo.email}</span>
        </li>
        <li>
          <strong>Phone:</strong> <span id="mobile">{userInfo.mobile}</span>
        </li>
        <li>
          <strong>Role:</strong> <span id="role">{userInfo.role}</span>
        </li>
      </ul>

      {/* <h1 className="members">OUR CURRENT PROJECT MEMBERS</h1>;  */}
    </div>
  );
}

