import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import events_image from "../Images/Events.jpg";
import socials_image from "../Images/Socials.jpg";
import projects_image from "../Images/Projects.jpg";
import people_image from "../Images/People.jpg";
import feedback_image from "../Images/Feedback.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Us Out</h1>
      <p>
        Google Developer Student Clubs (DSCs) are community groups for
        university and college students interested in learning about Google
        technologies and developer tools. These clubs are open to any student,
        regardless of their academic background or major. DSCs are organized and
        supported by Google Developers, who provide resources and guidance to
        help students learn, grow, and build projects using Google's
        technologies. DSCs offer a variety of activities, including workshops,
        study jams, speaker sessions, hackathons, and hands-on projects.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={events_image}
              text="Click here to get To Know Our Events"
              label="Our Events"
              path="/events"
            />
            <CardItem
              src={people_image}
              text="Click here to get To Know Our Members"
              label="Our Members"
              path="/members"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={feedback_image}
              text="Feedback is behind this card"
              label="Feedback"
              path="/feedback"
            />
            <CardItem
              src={projects_image}
              text="Click here to get To Know Our Projects"
              label="Projects"
              path="/projects"
            />
            <CardItem
              src={socials_image}
              text="Click here get to our social media platforms"
              label="Social Platforms"
              path="/socials"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
