import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Sidebar2 from "./Sidebar2";
const Facebookmaininterface = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Posts />
      <Sidebar2 />
    </div>
  );
};

export default Facebookmaininterface;
