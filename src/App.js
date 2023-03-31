import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/Forms/LogIn";
import SignIn from "./Components/Forms/SignIn";
import Welcome from "./Components/Pages/Welcome";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Navbar />} />

      </Routes>
    </div>
  );
}

export default App;
