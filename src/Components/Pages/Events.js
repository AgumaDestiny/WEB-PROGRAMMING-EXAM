import React from "react";
import "../../App.css";
import Navbar from "../Navbar";

export default function Events() {
  return (
    <div>
      <Navbar />
      <h1 className="events">HERE ARE OUR EVENTS!</h1>
      <p>
        The primary goal of DSCs is to help students become better developers by
        providing them with opportunities to learn from experienced developers,
        collaborate with other students, and build real-world projects using
        Google's technologies. Through these activities, students can gain
        valuable skills, build their portfolios, and prepare for careers in the
        tech industry.
      </p>
    </div>
  );
}
