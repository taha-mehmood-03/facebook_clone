import React from "react";
import "./App.css";
import Facebookmaininterface from "../src/components/Facebookmaininterface";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Error from "./components/Error";
import SignUp from "./SignUp";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Loginpage />} />
      <Route path="/facebook" element={<Facebookmaininterface />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
