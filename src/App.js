import React from "react";
import "./App.css";
// import UserCards from "./Components/UserCards";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/Forms/LogIn";
import SignIn from "./Components/Forms/SignIn";
import Welcome from "./Components/Pages/Welcome";
import Events from "./Components/Pages/Events";
import Socials from "./Components/Pages/Socials";
import People from "./Components/Pages/People";
import Projects from "./Components/Pages/Projects";
import Navbar from "./Components/Navbar";
import Feedback from "./Components/Pages/Feedback";
import AdminPage from "./Components/AdminPage";

function App() {
  // const users = [
  //   {
  //     userId: 1,
  //     userName: "John",
  //     userEmail: "john@example.com",
  //     userAge: 32,
  //   },
  //   {
  //     userId: 2,
  //     userName: "Jane",
  //     userEmail: "jane@example.com",
  //     userAge: 28,
  //   },
  //   {
  //     userId: 3,
  //     userName: "Bob",
  //     userEmail: "bob@example.com",
  //     userAge: 45,
  //   },
  // ];

  return (
    <div className="App">
      {/* <UserCards users={users} /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/members" element={<People />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
